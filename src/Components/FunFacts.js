import React from 'react'
import FunFact from './FunFact'

const FunFacts = () => {

    const funfacts = {
        funfact1:{
            icon:'icofont-home',
            num:3468,
            caption: 'Hospital Rooms'
        },
        funfact2:{
            icon:'icofont-user-alt-3',
            num:557,
            caption: 'Specialist Doctors'
        },
        funfact3:{
            icon:'icofont-simple-smile',
            num:4379,
            caption: 'Happy Patients'
        },
        funfact4:{
            icon:'icofont-table',
            num:32,
            caption: 'Years of Experience'
        }
    }

  return (
    <>
      <div id="fun-facts" className="fun-facts section overlay">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                {/* Start Single Fun */}
                 <FunFact funfacts={funfacts.funfact1}/>
                {/* End Single Fun */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* Start Single Fun */}
                 <FunFact funfacts={funfacts.funfact2}/>
                {/* End Single Fun */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* Start Single Fun */}
                 <FunFact funfacts={funfacts.funfact3}/>
                {/* End Single Fun */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* Start Single Fun */}
                <FunFact funfacts={funfacts.funfact4}/>
                {/* End Single Fun */}
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default FunFacts
