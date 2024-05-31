import React from 'react'
import './Section.scss'
const Section = () => {
  return (
    <>
      <div className="section">
        <h1 className="sectionTitle">О    компании <span>  LEANGROUP</span></h1>
        <div className="sectionBox">
        <iframe width="560" height="380" src="https://www.youtube.com/embed/19u4NDOHE9w?si=cY3BO1ci1dbLxE2i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p className="sectionText">Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и на сегодняшний день является ведущей компанией по производству ламинатных и экструзионных туб <br /><br />

Имея две технологии – для производства ламинатных и экструзионных туб, мы предлагаем вам широкий спектр возможностей. Большим преимуществом является собственный печатный цех в ламинате и in-line печать в экструзии с возможностью различных дополнительных опций декора. Особое внимание уделяется работе с поставщиками для контроля и поддержания качества производимой нами продукции. <br /><br />

С января 2018 года компания стала членом Европейской Ассоциации производителей туб (ETMA), что подтверждает сильную позицию бренда и на рынке Европы. </p>
        </div>
      </div>
    </>
  )
}

export default Section
