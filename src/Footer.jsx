import { ImVk } from 'react-icons/im'
import { ImGithub } from 'react-icons/im'
import { ImMail4 } from 'react-icons/im'
import { ImTelegram } from 'react-icons/im'

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="icons-list">
        <li className="icons-list__item"><a target="_blank" href="https://github.com/denisstrizhkin"><ImGithub /></a></li>
        <li className="icons-list__item"><a target="_blank" href="mailto:strdenis02@gmail.com"><ImMail4 /></a></li>
        <li className="icons-list__item"><a target="_blank" href="https://vk.com/denisstrizhkin"><ImVk /></a></li>
        <li className="icons-list__item"><a target="_blank" href="https://t.me/denisstrizhkin"><ImTelegram /></a></li>
      </ul>
    </footer>
  )
}

export default Footer
