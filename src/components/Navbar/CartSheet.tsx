import React, { ReactNode } from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import { Button } from '../ui/button'
import { ArrowRightFromLine, Trash } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'
import Image from 'next/image'

const CartSheet = ({ children }: { children: ReactNode }) => {
  type CartItems = {
    product: string
    price: number
  }

  const cartItems: CartItems[] = [
    {
      product: 'substance band likely yellow natural',
      price: 481,
    },
    {
      product: 'raw special army tape passage',
      price: 983,
    },
    {
      product: 'read trace protection very develop',
      price: 976,
    },
    {
      product: 'feature plenty climate high cat',
      price: 1787,
    },
    {
      product: 'straight found natural brick during',
      price: 219,
    },
  ]

  const getCartItemsTotal = () => {
    var total = 0
    cartItems.forEach((element) => {
      total += element.price
    })

    return total
  }

  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>

      <SheetContent className='flex flex-col justify-between min-w-[40vw]'>
        <div className='flex flex-col space-y-10'>
          <SheetHeader>
            <SheetTitle>Your Cart!</SheetTitle>
            <SheetDescription>See you cart items here.</SheetDescription>
          </SheetHeader>

          <div>
            {cartItems.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableHead>Sr.</TableHead>
                  <TableHead className=''>Product(s)</TableHead>
                  <TableHead className='text-right'>Price ($)</TableHead>
                </TableHeader>

                <TableBody>
                  {cartItems.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}.</TableCell>
                      <TableCell>{item.product}</TableCell>
                      <TableCell className='text-right'>
                        $ {item.price}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>

                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={2}>Total</TableCell>
                    <TableCell className='text-right'>
                      $ {getCartItemsTotal()}
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            ) : (
              <div className='flex flex-col justify-center items-center h-[60vh]'>
                <Image
                  src={'/empty_cart_animation.gif'}
                  alt='Empty Cart'
                  width={200}
                  height={200}
                />

                <h3 className='font-semibold text-3xl mb-2'>
                  Oops! Your Cart is Empty.
                </h3>
                <p>Add products to Cart to Checkout.</p>
              </div>
            )}
          </div>
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button
              className='w-32 flex justify-between items-center'
              disabled={cartItems.length <= 0}
            >
              Checkout <ArrowRightFromLine />
            </Button>
          </SheetClose>

          <Button
            role='submit'
            variant={'destructive'}
            className='w-32 flex justify-between items-center'
            disabled={cartItems.length <= 0}
          >
            Clear Cart <Trash />
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default CartSheet
