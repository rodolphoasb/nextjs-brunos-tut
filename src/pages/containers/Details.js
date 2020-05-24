import Link from 'next/link'

const people = [
  { v: 'car', name: 'Pedro' },
  { v: 'Bike', name: 'Rodolpho' },
  { v: 'airplane', name: 'Semenzato' }
]

export function Details() {
  return (
    <>
      {people.map(e => (
        <div key={e.name}>
          <Link as={`/${e.v}/${e.name}`} href='/[vehicle]/[person]'>
            <a>{`Navigate to ${e.name}'s ${e.v}`}</a>
          </Link>
        </div>
      ))}
    </>
  )
}
