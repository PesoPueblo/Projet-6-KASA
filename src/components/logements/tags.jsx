export function Tags({ keyWords }) {
  const tags = []
  for (let i = 0; i < keyWords.length; i++) {
    tags.push(
      <p key={`${keyWords[i]}`} className="tags">
        {keyWords[i]}
      </p>
    )
  }
  return tags
}
