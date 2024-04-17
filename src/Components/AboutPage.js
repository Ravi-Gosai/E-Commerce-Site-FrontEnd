import classes from './AboutPage.module.css'
const Aboutpage = props =>{
    return(
        <div className={classes.aboutdiv}>
          <div> <h2> About</h2></div> 
          <div>
            <p>lipkart acquired WeRead in 2010 from Lulu.com that helped it build its foundational strength which was the digital retail of books. This space was otherwise only shared by very limited number of players at that time in the market, such as Landmark and Infibeam. Flipkart used aggressive discounts and focused on customer service to move towards a leadership position in the market. WeRead consisted of a large network of readers (~3 Million) with around 60 million books. The platform also noted information that was user generated – such as people marking a book as favorite or leaving a review or rating. WeRead, because of its utility to community and independent nature maintained its brand identity even after acquisition</p>
            <p>In 2014, Flipkart invested in Ngpay to strengthen the mobile payment services since there was an increased focus on mobile ecommerce; Flipkart reported that mobile ecommerce was contributing 50% of its sales. Investment in Ngpay was followed by Flipkart shutting Payzippy – the in-house payment gateway and merged it with Ngpay. The Ngpay mobile application could be used to buy services and products through the mobile phones</p>
          </div>
        </div>
    )
}
export default Aboutpage;
