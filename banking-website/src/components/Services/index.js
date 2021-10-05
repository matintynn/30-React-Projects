import React from 'react'
import Icon1 from '../../images/img-4.svg'
import Icon2 from '../../images/img-6.svg'
import Icon3 from '../../images/img-9.svg'
import {
    ServicesContainer,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
    ServicesH1
} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                {/* card 1 */}
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>Your overall revenue will increase as a result of a decrease in fees.
                    </ServicesP>
                </ServicesCard>
                {/* card 2 */}
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Virtual Office</ServicesH2>
                    <ServicesP>We offer an online platform that's accessible from anywhere.
                    </ServicesP>
                </ServicesCard>
                {/* card 3 */}
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>
                        Premium Benefits
                    </ServicesH2>
                    <ServicesP>Get 5% back on your purchases with our special membership card.
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
