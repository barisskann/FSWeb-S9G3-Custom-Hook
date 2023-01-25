export default function Check() {
  let veri;
  localStorage.getItem("koyuMod") === "true" ? (veri = true) : (veri = false);
  return veri;
}
