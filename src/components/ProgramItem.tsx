import {
  Link
} from 'react-router-dom'

type ProgramItemProps = {
  link: string;
  imageUrl: string;
  title: string;
  description: string;
}
export function ProgramItem({
  link, imageUrl, title, description
}: ProgramItemProps) {
  return (
    <Link to={link}>
      <div className="relative select-none">
        <img src={imageUrl} alt={title} className="rounded-lg h-60 md:h-56 w-full object-cover" />
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-gray-950 bg-opacity-10 rounded-lg hover:bg-opacity-30 transition-all duration-300"></div>
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#007aff] to-transparent bg-opacity-50 px-5 pt-9 pb-5 rounded-bl-lg rounded-br-lg">
        <h1 className="text-2xl text-white font-bold font-playfair">{title}</h1>
        <p className="text-white mt-2 text-sm">
          {description}
        </p>
      </div>
    </div>
  </Link>
)
}