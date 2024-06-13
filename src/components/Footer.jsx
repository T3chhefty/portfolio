export default function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className="footer-container">
      <p>T3chefty © {year}</p>
    </div>
  );
}
