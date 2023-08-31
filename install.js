run()
async function run() {
  const fm = FileManager[module.filename.includes("Documents/iCloud~") ? "iCloud" : "local"]();
  const filePath = fm.joinPath(fm.documentsDirectory(), `宝马小组件.js`);
  const url = "https://cdn.jsdelivr.net/gh/owyr/bmw-widget@main/bmw-widget.js";
  const content = await new Request(encodeURI(url)).load();
  fm.write(filePath, content);
  fm.remove(module.filename);
  Safari.open(encodeURI(`scriptable:///run?scriptName=宝马小组件`));
}
