import re,xml.etree.ElementTree as ET,csv,sys
ns={'m':'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
ss=[ ''.join(t.text or '' for t in si.iter('{%s}t'%ns['m'])) for si in ET.parse('xl/sharedStrings.xml').getroot().findall('m:si',ns)]
rows=[]
for r in ET.parse('xl/worksheets/sheet1.xml').getroot().iter('{%s}row'%ns['m']):
    row={}
    for c in r.findall('m:c',ns):
        col=re.match(r'[A-Z]+',c.get('r')).group()
        v=c.find('m:v',ns); isv=c.find('m:is',ns)
        val=''
        if v is not None: val=ss[int(v.text)] if c.get('t')=='s' else v.text
        elif isv is not None: val=''.join(t.text or '' for t in isv.iter('{%s}t'%ns['m']))
        row[col]=val
    rows.append(row)
cols=sorted({k for r in rows for k in r},key=lambda x:(len(x),x))
w=csv.writer(open(sys.argv[1],'w',newline='',encoding='utf-8'))
for r in rows: w.writerow([r.get(c,'') for c in cols])
print(len(rows),'rows',cols)
