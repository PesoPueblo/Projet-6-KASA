export default function Banner(PropsBanner) {
  return (
    <div
      className="kasa-banner"
      style={{ backgroundImage: `url(${PropsBanner.url})` }}
    >
      <h1>{PropsBanner.title}</h1>
    </div>
  )
}
