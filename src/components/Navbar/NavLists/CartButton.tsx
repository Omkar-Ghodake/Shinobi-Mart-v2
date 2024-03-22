import { cartButton } from '@/data/navbar-items'
import CartSheet from '../CartSheet'
import NavLinkItem from '../NavLinkItem'

const CartButton = () => {
  return (
    <>
      <CartSheet>
        <NavLinkItem
          title={cartButton.title}
          showTitle={cartButton.showTitle}
          url={cartButton.url}
          icon={cartButton.icon}
          dropdown={cartButton.dropdown}
          dropDownItems={cartButton.dropDownItems}
          isButton={cartButton.isButton}
          buttonVariant={cartButton.buttonVariant}
          buttonSize={cartButton.buttonSize}
          className={cartButton.className}
          titleClassName={cartButton.titleClassName}
          iconClassName={cartButton.iconClassName}
        />
      </CartSheet>
    </>
  )
}

export default CartButton
