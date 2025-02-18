import express from 'express';
import { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import router from './app/routes';
import stripe from './app/modules/payment/stripe';
import { orderRoutes } from './app/modules/order/order.route';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'http://localhost:5174',
      'http://localhost:3000',
    ],
    credentials: true,
  }),
);
app.use(bodyParser.json());

// application route
app.use('/api', router);
app.use('/orders', orderRoutes);

// app.post('/create-payment-intent', async (req, res) => {
//   const { price } = req.body;
//   console.log(price);
//   const priceInCent = parseFloat(price) * 100;
//   if (!price || priceInCent < 1) return;

//   // generate client secret
//   const { client_secret } = await stripe.paymentIntents.create({
//     amount: priceInCent,
//     currency: 'usd',
//     automatic_payment_methods: {
//       enabled: true,
//     },
//   });
//   console.log(client_secret);
//   //send client secret as response
//   res.send({ clientSecret: client_secret });
// });

app.post('/create-payment-intent', async (req, res) => {
  const { price } = req.body;
  console.log(price);

  // Convert the price to cents and round it to the nearest integer
  const priceInCent = Math.round(parseFloat(price) * 100);

  if (!price || priceInCent < 1) return;

  // Generate client secret
  const { client_secret } = await stripe.paymentIntents.create({
    amount: priceInCent,
    currency: 'usd',
    automatic_payment_methods: {
      enabled: true,
    },
  });

  console.log(client_secret);

  // Send client secret as response
  res.send({ clientSecret: client_secret });
});

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server is running',
  });
});

// Error handlers
app.use(globalErrorHandler);
app.use(notFound);

export default app;
