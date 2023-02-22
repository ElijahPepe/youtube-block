import { FileBlockProps } from "@githubnext/blocks";
import "./style.css"

export default function (props: FileBlockProps) {
  const { content, metadata } = props;
  metadata.videoId = content;

  return (
    <iframe
      className='youtube-iframe'
      src={`https://www.youtube.com/embed/${metadata.videoId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}