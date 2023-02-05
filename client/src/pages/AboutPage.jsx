import React from 'react'
import Container from '@mui/material/Container'
import PageHeader from '../components/PageHeader'
import { Grid } from '@mui/material'

const AboutPage = () => {
    return (
        <Container>
            <PageHeader title='About Page' subtitle='On this page you can find explanations about using the application'/>

            <Grid container spacing={2}>
                <Grid item xs={12} md={8} alignSelf='center'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi id impedit veniam nobis. Maxime accusamus velit illo ipsam. Facere temporibus illo sed perspiciatis iusto? Laborum nihil, officia rerum itaque fuga laboriosam vitae minima esse ipsa nesciunt nobis eligendi natus corporis distinctio dignissimos. Quasi ad autem blanditiis quod nihil veniam vitae accusamus necessitatibus, aliquid praesentium ullam non. Deleniti, numquam atque officiis animi doloremque aliquid rerum nihil et at assumenda earum a voluptatum consequuntur dolore aliquam sed debitis itaque quidem iste beatae! Iste consequuntur, possimus cupiditate corporis vero molestiae, dolores facilis repudiandae doloribus qui nostrum obcaecati labore dolorum. Voluptates accusantium nulla quo vitae repudiandae placeat tempora non id eligendi. Ex aliquam labore, assumenda pariatur placeat rem perspiciatis provident quae doloribus, quidem rerum, amet similique fuga quia. Ullam, facilis officiis laboriosam nihil iusto ea magnam harum quas consequuntur illo vitae, quibusdam eos eum hic culpa suscipit, dolores tempore voluptates neque aliquid! Sapiente, perferendis rem? Ipsam magnam eaque impedit reprehenderit nemo animi fugiat! Dignissimos vitae porro, laboriosam error officiis iure odio tempora cum recusandae repellendus architecto ut mollitia omnis illo fugiat temporibus dolorum. Praesentium ratione molestiae iusto sequi unde qui necessitatibus corrupti harum, totam minus assumenda dignissimos nemo perferendis delectus amet quo omnis tempora natus velit. Neque, commodi sed beatae est fugiat dignissimos quas nam hic aperiam cumque, asperiores impedit, magni repudiandae doloribus eius magnam. Explicabo repellendus fugiat necessitatibus, odit beatae eos modi est dolore possimus harum quidem ea pariatur delectus quas nesciunt fuga dignissimos nisi dolores ullam earum doloribus? Temporibus sed deleniti fuga.
                </Grid>
                <Grid item xs={12} md={4} sx={{ display: { md: 'flex', xs: 'none' }, justifyContent: 'center' } }>
                    {/* <img style={{ maxWidth: '100%' }} src="/assets/images/card.jpg" alt="Cards" /> */}
                    <img src="/assets/images/card.jpg" alt="Cards" width='100%' />
                </Grid>
            </Grid>
        </Container>
    )
}

export default AboutPage