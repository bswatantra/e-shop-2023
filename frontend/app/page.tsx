import { Button } from '@nextui-org/button'
import Image from 'next/image'
export default function Home() {
  return (
    <main>
      <Button color="primary" variant="bordered" isLoading>
        Submit
      </Button>
    </main>
  )
}
