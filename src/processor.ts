import { AuctionHouseProcessor } from './types/solana/auction_house_processor.js'

// AuctionHouseProcessor.bind({ address: 'hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk' }).onSell((args, accounts, ctx) => {
//   if (accounts.auctionHouse == '6gysn49dh2tfwbqvLqWpJNwisjkZCJoX3AyjuyFUn89C') {
//     ctx.meter.Counter('total_token_size').add(args.tokenSize, { type: 'sell' });
//     ctx.meter.Gauge('buyer_price').record(args.buyerPrice,  { type: 'sell' });
//   }
// }).onBuy((args, accounts, ctx) => {
//   if (accounts.auctionHouse == '6gysn49dh2tfwbqvLqWpJNwisjkZCJoX3AyjuyFUn89C') {
//     ctx.meter.Counter('total_token_size').add(args.tokenSize, { type: 'buy' });
//     ctx.meter.Gauge('buyer_price').record(args.buyerPrice,  { type: 'buy' });
//   }
// }).onCancel((args, accounts, ctx) => {
//   if (accounts.auctionHouse == '6gysn49dh2tfwbqvLqWpJNwisjkZCJoX3AyjuyFUn89C') {
//     ctx.meter.Counter('cancel_times').add(1);
//     ctx.meter.Counter('total_token_size').add(args.tokenSize, { type: 'cancel' });
//     ctx.meter.Gauge('buyer_price').record(args.buyerPrice,  { type: 'cancel' });
//   }
// })

AuctionHouseProcessor.bind({ address: '6gysn49dh2tfwbqvLqWpJNwisjkZCJoX3AyjuyFUn89C' }).onSell((args, accounts, ctx) => {
  if (accounts.auctionHouse == '6gysn49dh2tfwbqvLqWpJNwisjkZCJoX3AyjuyFUn89C') {
    ctx.meter.Counter('total_token_size').add(args.tokenSize, { type: 'sell' });
    ctx.meter.Gauge('buyer_price').record(args.buyerPrice,  { type: 'sell' });
  }
})

// .onBuy((args, accounts, ctx) => {
//   if (accounts.auctionHouse == '6gysn49dh2tfwbqvLqWpJNwisjkZCJoX3AyjuyFUn89C') {
//     ctx.meter.Counter('total_token_size').add(args.tokenSize, { type: 'buy' });
//     ctx.meter.Gauge('buyer_price').record(args.buyerPrice,  { type: 'buy' });
//   }
// }).onCancel((args, accounts, ctx) => {
//   if (accounts.auctionHouse == '6gysn49dh2tfwbqvLqWpJNwisjkZCJoX3AyjuyFUn89C') {
//     ctx.meter.Counter('cancel_times').add(1);
//     ctx.meter.Counter('total_token_size').add(args.tokenSize, { type: 'cancel' });
//     ctx.meter.Gauge('buyer_price').record(args.buyerPrice,  { type: 'cancel' });
//   }
// })