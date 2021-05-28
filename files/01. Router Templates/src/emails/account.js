const sgmail = require('@sendgrid/mail')

const APIKey = 'API KEY'

sgmail.setApiKey(APIKey)

const msg = {
  to: 'Email@receiver.com',
  from: 'Email@sender.com',
  subject: 'This is just for testing',
  text: `Cadbury was established in Birmingham, England in 1824, by John Cadbury, a Quaker who sold tea, coffee and drinking chocolate. Cadbury developed the business with his brother Benjamin, followed by his sons Richard and George. George developed the Bournville estate, a model village designed to give the company's workers improved living conditions. Dairy Milk chocolate, introduced in 1905, used a higher proportion of milk within the recipe compared with rival products. By 1914, the chocolate was the company's best-selling product. Cadbury, alongside Rowntree's and Fry's, were the big three British confectionery manufacturers throughout much of the 19th and 20th centuries.

  The firm's first major breakthrough occurred in 1866 when Richard and George introduced an improved cocoa into Britain. A new cocoa press developed in the Netherlands removed some of the unpalatable cocoa butter from the cocoa bean. The firm began exporting its products in the 1850s. In 1861, the company created Fancy Boxes — a decorated box of chocolates — and in 1868 they were sold in boxes in the shape of a heart for Valentine's Day. Boxes of filled chocolates quickly became associated with the holiday.`,
}

sgmail.send(msg)
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })