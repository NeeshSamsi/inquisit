import type { FC } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn, displayNames, formatDate } from "@/lib/utils"

type Props = {
  authors: Author[]
  date: string
  className?: string
}

const BlogAuthors: FC<Props> = ({ authors, date, className }) => {
  return (
    <div className={className}>
      {authors.length === 1 ? (
        <SingleAuthor author={authors[0]} date={date} />
      ) : (
        <MultipleAuthors authors={authors} date={date} />
      )}
    </div>
  )
}

const SingleAuthor: FC<{ author: Author; date: string }> = ({
  author,
  date,
}) => {
  const commonClasses = `flex w-fit items-center gap-2 xl:gap-4 rounded-xl py-2 px-3 xl:py-3 xl:px-4`
  const children = (
    <>
      <Image
        src={author.avatar}
        alt={`Avatar of ${author.name}`}
        width={72}
        height={72}
        sizes="48px, (min-width: 1280px) 72px"
        className="aspect-square w-12 rounded-full object-cover xl:w-18"
      />
      <div className="grid xl:gap-1">
        <p className="text-lg font-semibold xl:text-xl">By {author.name}</p>
        <p className="text-sm font-normal xl:text-base">{formatDate(date)}</p>
      </div>
    </>
  )

  return author.link ? (
    <Link
      href={author.link}
      className={`${commonClasses} transition-colors hover:bg-light`}
    >
      {children}
    </Link>
  ) : (
    <div className={commonClasses}>{children}</div>
  )
}

const MultipleAuthors: FC<{ authors: Author[]; date: string }> = ({
  authors,
  date,
}) => {
  return (
    <Link
      href="/blog/authors"
      className="flex w-fit items-center gap-4 rounded-xl px-3 py-2 transition-colors hover:bg-light xl:px-4 xl:py-3"
    >
      <div className="flex">
        {authors.map((author, i) => (
          <Image
            key={author.slug}
            src={author.avatar}
            alt={`Avatar of ${author.name}`}
            width={72}
            height={72}
            className={cn("aspect-square w-12 rounded-full shadow-lg xl:w-18", {
              "-ml-8": i !== 0,
            })}
          />
        ))}
      </div>
      <div className="grid xl:gap-1">
        <p className="text-lg font-semibold xl:text-xl">
          By {displayNames(authors.map((author) => author.name))}
        </p>
        <p className="text-sm font-normal xl:text-base">{formatDate(date)}</p>
      </div>
    </Link>
  )
}

export default BlogAuthors
