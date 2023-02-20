from bs4 import BeautifulSoup
with open("page.htm") as fp:
    soup = BeautifulSoup(fp, 'html.parser')

out = []

for content in soup.find_all("div", {"class": "card"}):
    baseTitle = content.find("b")
    urls = []
    for a in content.find_all("a"):
        urls.append({
            "title": "{}".format(a.getText()),
            "link":"{}".format(a["href"])
        })
    out.append({
        "baseTitle":"{}".format(baseTitle.getText()),
        "urls":urls
    })

print(out)