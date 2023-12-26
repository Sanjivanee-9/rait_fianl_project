import React from 'react'

    const FunFact = ({funfacts}) => {
        console.log(funfacts.caption)

  return (
    <>
    <div class="single-fun">
        <i class={`icofont ${funfacts.icon}`}></i>
        <div class="content">
            <span class="counter">{funfacts.num}</span>
            <p>{funfacts.caption}</p>
        </div>
    </div>
    </>
  )
}

export default FunFact
