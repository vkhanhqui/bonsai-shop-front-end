import React from 'react'
import { BsTypeH3 } from 'react-icons/bs'
import { Gi3DHammer, Gi3DMeeple, GiAirplane, GiArrowCluster, GiArrowCursor, GiArrowDunk, GiArrowFlights, GiArrowhead, GiArrowScope, GiArrowsShield, GiArrowWings, GiBlackBook, GiBowArrow, GiBroadheadArrow, GiCompass, GiDiamondHard, GiEnergyArrow, GiFastArrow, GiHeavyArrow, GiLobArrow, GiMissileLauncher, GiPaperArrow, GiSmashArrows, GiSpineArrow, GiStabbedNote, GiTronArrow, GiZigArrow } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
    
  },
  {
    id: 2,
    text: 'About',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
  {
    id: 4,
    text: 'Services',
    url: '/services',
  },
  
  {
    id: 5,
    text: 'Blogs',
    url: '/blogs',
  },
  {
id:6,
url:'/register'

  }

]

export const services = [
  {
    id: 1,
    icon: <Gi3DMeeple/>,
     
    title: 'mission',
    text:
      'Không đơn giản chỉ là bán hàng như ban đầu, Green Life sẽ đem đến cho bạn một không gian đầy sáng tạo, là nơi mọi người có thể đến cùng thưởng thức sự tươi xanh và có những trải niệm cho riêng mình.',
  },
  {
    id: 2,
    icon: <GiArrowWings />,
    title: 'vision',
    text:
      'Green Life sẽ ngày càng hoàn thiện sứ mệnh thương hiệu: Lan tỏa tình yêu xanh, mở rộng mình để trở về với thiên nhiên; đồng thời, cố gắng giữ vững những giá trị tốt đẹp của truyền thống. Green Life hứa hẹn sẽ đem đến cho bạn một cuộc sống xanh.',
  },
  {
    id: 3,
    icon: <GiBlackBook/>,
    title: 'history',
    text:
      'Vào tháng 2 năm 2022, Green Life chính thức được ra đời, xuất phát từ niềm đam mê với cây xanh. Green Life là tâm huyết của đội ngũ thuộc thế hệ trẻ. Bất cứ ai cầm trên tay sản phẩm xanh của Green Life chúng tôi cũng sẽ cảm nhận được: một chậu gốm sứ, một cái cây, nó không chỉ đơn thuần là những sản phẩm vô tri vô giác nhưng trong nó là cả một sự sống, tâm hồn và cả thương yêu.',
  },
]

export const products_url = 'dff'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
