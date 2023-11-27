export function Space({
  height = 12,
  width = height,
  inline = false,
}: {
  height?: number
  width?: number
  inline?: boolean
}) {
  return (
    <div
      style={{
        display: inline ? 'inline-block' : 'block',
        height: `${height}px`,
        width: `${width}px`,
      }}
    />
  )
}
