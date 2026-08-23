// Aruna Spa — service data lifted from maryaruna.glossgenius.com/services (Aug 2026).
// Prices and durations are the GlossGenius booking prices, the source of truth Mary confirmed.
// Service names have been corrected for spelling; originals noted in `was` where they differed.

export const CATS = [
  { key: 'pmu',      label: 'Brows & permanent makeup' },
  { key: 'hairloss', label: 'Hair loss & scalp' },
  { key: 'skin',     label: 'Facials & skin' },
  { key: 'laser',    label: 'Laser hair removal' },
  { key: 'body',     label: 'Body & massage' },
  { key: 'packages', label: 'Packages' },
  { key: 'training', label: 'Training' },
  { key: 'mobile',   label: 'House calls' }
];

export const SERVICES = [
  { n: 'Consultation', cat: 'pmu', price: 0, label: 'Free', dur: 20, note: 'Twenty minutes before anything permanent. New brow and PMU clients: a $150 fee applies to no-shows or cancellations inside 24 hours.' },
  { n: 'Complimentary touch-up', was: 'Complementary Touch Up', cat: 'pmu', price: 0, label: 'Included', dur: 45, note: 'Valid four to six weeks after your first visit, eight weeks at the outside. Regular touch-up price applies to no-shows.' },
  { n: 'Microblading', cat: 'pmu', price: 580, cash: 500, dur: 90, note: 'Hand-drawn strokes for a fuller, natural brow. Includes the touch-up inside four weeks. Repeat touch-ups every 6 to 24 months depending on your skin.' },
  { n: 'Powder brows', cat: 'pmu', price: 580, cash: 500, dur: 90, note: 'A soft makeup finish rather than strokes. Includes the touch-up inside four weeks.' },
  { n: 'Nano-blading brows', cat: 'pmu', price: 650, cash: 600, dur: 90, note: 'Manual and machine technique combined.' },
  { n: 'Lash effect / baby eyeliner', cat: 'pmu', price: 480, dur: 90, note: 'Semi-permanent liner that stays put. Defines the lash line without looking drawn on.' },
  { n: 'Lip tint / blush', cat: 'pmu', price: 650, plus: true, dur: 150, note: 'Two sessions. Some skin types need a third or fourth pass depending on pigment retention and aftercare.' },
  { n: 'Lip neutralisation', cat: 'pmu', price: 800, dur: 150, note: 'Corrects dark or uneven pigment before colour. Three to five sessions may be needed.' },
  { n: 'Annual lip tint touch-up', was: 'Anual Lip Tint/blush Touch Up', cat: 'pmu', price: 350, dur: 90, note: 'For 12 to 24 months after the initial procedure.' },
  { n: 'Microblading / powder touch-up', cat: 'pmu', price: 280, dur: 60, note: '6 to 18 months after the initial procedure. Does not include a further touch-up. Redone brows for existing clients $400.' },
  { n: 'Combo / micro-nano touch-up', cat: 'pmu', price: 350, dur: 60, note: '6 to 18 months after the initial procedure. Additional touch-up $100 if needed.' },
  { n: 'Annual lash / eyeliner touch-up', was: 'Anual Lash Eff/Eyeliner Touch Up', cat: 'pmu', price: 250, dur: 60, note: 'For 12 to 24 months after the initial procedure.' },

  { n: 'Scalp micropigmentation', cat: 'hairloss', price: 1200, plus: true, dur: 180, note: 'The look of a closely cropped hairstyle, without surgery. Hairline through to full-head alopecia coverage.' },

  { n: 'Mini / teen facial', was: 'Mini/ Teen Facila', cat: 'skin', price: 70, dur: 40 },
  { n: 'Dermaplaning only', cat: 'skin', price: 80, dur: 40, note: 'Manual exfoliation, dead skin and peach fuzz off, immediate glow.' },
  { n: 'Mini facial', cat: 'skin', price: 80, dur: 35, note: 'The short version: cleanse, exfoliate, and hydrate.' },
  { n: 'Lash lift and tint', cat: 'skin', price: 90, dur: 60, note: 'Curl and darken your own lashes. Lasts 6 to 12 weeks with your lash cycle.' },
  { n: 'Lymphatic facial massage', cat: 'skin', price: 100, dur: 50, note: 'Gentle rhythmic drainage to bring puffiness down.' },
  { n: 'Flawless signature facial', cat: 'skin', price: 120, dur: 60, note: 'Deep cleanse built around your skin. Expect some redness after any face treatment.' },
  { n: 'Just microneedling', cat: 'skin', price: 150, dur: 60, note: 'Stem cells, double cleanse, exfoliation and dermaplaning.' },
  { n: 'Radio-frequency facial', was: 'Radio Frequiency Facial', cat: 'skin', price: 150, dur: 60, note: 'Skin tightening for face and neck.' },
  { n: 'Flawless facial + dermaplaning', cat: 'skin', price: 180, dur: 75, note: 'The signature facial with manual exfoliation on top.' },
  { n: 'HydraFacial + dermaplaning', was: 'HydraFacial + Dermaplning', cat: 'skin', price: 200, dur: 75, note: 'Cleanse, exfoliate, extract, hydrate. Instant and it holds.' },
  { n: 'The Beauty Nap', cat: 'skin', price: 230, dur: 80, note: 'Dermaplaning facial with neck, shoulder, arm and foot massage. $100 deposit.' },
  { n: 'The Dream Facial', cat: 'skin', price: 300, dur: 90, note: 'Deep cleanse, hydrafacial, dermaplaning, radio-frequency anti-aging massage and a travel kit of the Lemieux products used on you.' },
  { n: 'Microneedling facial + dermaplaning', cat: 'skin', price: 350, dur: 90, note: 'With stem cells. Collagen induction for texture, firmness and fine lines. Skin stays red one to three days.' },

  { n: 'Armpit laser', cat: 'laser', price: 75, plus: true, dur: 10, note: '6 to 8 sessions to reduce 80–100% of hair. 20% off packages of six or more.' },
  { n: 'Lip and chin laser', cat: 'laser', price: 90, dur: 10, note: '6 to 10 sessions for up to 80% reduction. 20% off packages of six or more.' },
  { n: 'Male laser hair removal', cat: 'laser', price: 100, plus: true, dur: 60, note: 'Men need more sessions. Armpit $80, full back $230, full front $230, upper arms $100, full upper body $450.' },
  { n: 'Half leg', was: 'Half Leg Lower ($125 )upper ($135)', cat: 'laser', price: 125, dur: 45, note: 'Lower $125, upper $135. 6 to 10 sessions.' },
  { n: 'Extended bikini', cat: 'laser', price: 130, plus: true, dur: 15, note: '6 to 10 sessions for 80–100% reduction.' },
  { n: 'Full face laser', cat: 'laser', price: 150, dur: 20, note: '8 to 10 sessions for 80–100% reduction.' },
  { n: 'Brazilian laser', cat: 'laser', price: 200, plus: true, dur: 15, note: '6 to 10 sessions for 80–100% reduction.' },
  { n: 'Full legs laser', cat: 'laser', price: 250, plus: true, dur: 75, note: '6 to 10 sessions, no downtime, annual touch-ups may be needed.' },

  { n: 'Lymphatic drainage massage', cat: 'body', price: 120, dur: 60, note: 'One area per session for the best result.' },
  { n: 'Full body massage', cat: 'body', price: 120, dur: 60, note: 'Women only, existing clients or by recommendation. $60 deposit.' },
  { n: 'Body sculpting', cat: 'body', price: 135, dur: 60, note: 'Contouring to reduce fat, tighten skin and define muscle. Package of ten $1,000.' },
  { n: 'Post-lipo massage, package of ten', was: 'Post Lipo Massage Pacake Of 10', cat: 'body', price: 1200, cash: 900, dur: 60, note: 'Brings swelling and bruising down after liposuction by draining excess fluid. Faster recovery, less discomfort.' },

  { n: 'Dermaplaning facial & body massage', cat: 'packages', price: 230, dur: 120, note: 'Two treatments, one appointment.' },
  { n: '4 signature facials', cat: 'packages', price: 380, dur: 60, note: 'Package of four.' },
  { n: 'Microneedling special, 3 sessions', was: 'Microneedleling Speclai', cat: 'packages', price: 400, dur: 75, note: 'Three sessions with stem cells, including dermaplaning and extractions.' },
  { n: '4 dermaplaning facials, deep hydration', cat: 'packages', price: 480, dur: 75, note: 'Package of four, full facial plus dermaplaning and deep hydration.' },
  { n: '5 full body massages', cat: 'packages', price: 480, dur: 60 },
  { n: '4 HydraFacial + dermaplaning + RF', cat: 'packages', price: 600, dur: 75, note: 'Package of four.' },
  { n: 'Laser, 8 sessions', cat: 'packages', price: 2000, cash: 2000, dur: 60, note: 'Lower body (brazilian, full legs) or upper body (underarms, face). $2,000 cash, $2,200 by card, Zelle or Venmo.' },

  { n: 'Perfecting brows training', was: 'Prfecting Brows Training', cat: 'training', price: 1800, dur: 480, note: 'Two days, twelve hours of practice, for artists with previous experience. Natural crisp hairstrokes and soft powder brows.' },

  { n: 'House calls', cat: 'mobile', price: 700, plus: true, dur: 90, note: 'Long Island, New Jersey and Whitestone, minimum three clients. $680 initial procedure including the second visit, touch-ups 6 to 18 months later $350. Micropigmentation only. $100 deposit for new clients. Text to schedule.' }
];

export const IMG = {
  cover:      'https://static.glossgenius.com/public/salon/f893e6ce0d22374c613c44780aa0aee205264592/website_cover_image/d400e009fd15fd892a954cee4f0ce2ce.jpeg',
  microblade: 'https://static.glossgenius.com/public/service/c16d704b7b806e71b6742cfc155d343dd37f0980/image/e8405cbf187a2835ca1331dedb9e1480.jpg',
  powder:     'https://static.glossgenius.com/public/service/b6458f6b21b329f2d1afe5bb9a2856087c0da62a/image/cb345b6304067779cc9b6309e6c16c01.jpg',
  nano:       'https://static.glossgenius.com/public/service/6f8a120d19dbb70017319ad1b8b8a14fbd5a1b5e/image/7e00a381ee6a53d716d9c429912458b6.jpg',
  eyeliner:   'https://static.glossgenius.com/public/service/c5854b85ea3806b5446d2e347153a44cea9145f5/image/2f225d8d0a8fb7b65c31dd9e8cf1c453.jpg',
  lips:       'https://static.glossgenius.com/public/service/9f725bfbedb165357855d8cc01f589fa83dbb866/image/b902d516b3fbdfc786c97d897d5bcb94.jpg',
  lipneut:    'https://static.glossgenius.com/public/service/9181f0389959d1152ba922cb1dbdccef2f246d92/image/db78026386eb3279ee4e34acf92bcce9.jpg',
  scalp:      'https://static.glossgenius.com/public/service/9f873a9bb5fa51581f6fe2e4063770e82f927485/image/3e0a2a5188a086f5b085f237c8d5feaf.jpg',
  dream:      'https://static.glossgenius.com/public/service/8dfbe73a0e0f50dd445fc7ffdc503a4cce7acbcd/image/7b42bcde136cba03ce63e11fe2bfe29c.jpg',
  hydra:      'https://static.glossgenius.com/public/service/05d740b514964b2c10fad9fce2d6b582c9e03ac7/image/39b677a69a0e92e9cb1b55f06632f135.jpg',
  micro:      'https://static.glossgenius.com/public/service/91df390255d7dd8557de5865c50b150afc42e9fc/image/8c0d430e5bcdd80703e8d3ba4001e4d4.jpg',
  brazilian:  'https://static.glossgenius.com/public/service/2e371d64c443b6cf5ead8542dfadfc236bd2e8e5/image/2606c32ac1c223ece7f6a0b362535f93.jpg',
  legs:       'https://static.glossgenius.com/public/service/60493fd5a1dab6010fe839b5ede30d2c7e4078cb/image/bd731cbcaa59a9074256876b9e08112a.jpg',
  male:       'https://static.glossgenius.com/public/service/2f25f0eb8c3678ade583983bc6d9a62269f53d2f/image/913bc358852476b39f0c5ecb8e725b16.jpg',
  lymph:      'https://static.glossgenius.com/public/service/cda99ee0f6025aecba686761bd1e4bcf63288915/image/fc361061291617e15cc3779533c6f00e.jpg',
  sculpt:     'https://static.glossgenius.com/public/service/1b503a953d401f40acafa71a9fc68ca75c71b320/image/1bb8572f5f7dc8b09594c654f15a176f.jpg',
  training:   'https://static.glossgenius.com/public/service/530d4cf4267c8c3da26fa643bbb3bc19b1ac4698/image/acd51aa786c40699e90a72a3db6e4df7.jpg',
  nap:        'https://static.glossgenius.com/public/service/af2ee4e4451ef7c721d08ed1d4a644e418cb0bf2/image/29ae733fc1df44ca1d2806f435ddaf2e.jpg',
  house:      'https://static.glossgenius.com/public/service/7e0318f5efa6ae48a677c3ffa96a494ebf33eba9/image/5aa899a36edc3fe9704cbdbff669c6f9.jpg'
};

// The ten ad campaigns. One landing page each, rendered from this.
export const SEGMENTS = {
  brows: {
    layout: 'editorial',
    label: 'Brows & PMU', nav: 'Brows & PMU', from: '$580', img: IMG.microblade,
    eyebrow: 'Microblading · Powder · Nano · Lips · Eyeliner',
    h1: 'Everyone will think you slept well,|and nobody will ask what you had done.',
    sub: 'Hand-worked brows, lips and liner in a Staten Island studio since 2014. Your second sitting is already in the price, cash is lower on every service, and you are told what your skin will and will not hold before you pay.',
    picks: ['Microblading', 'Powder brows', 'Nano-blading brows', 'Lip tint / blush', 'Lash effect / baby eyeliner', 'Lip neutralisation', 'Microblading / powder touch-up', 'Consultation'],
    points: [
      ['You will not look done', 'Shape is drawn on and agreed with you before a single stroke goes in. If it is wrong at that stage it costs nothing to change.'],
      ['One sitting is never finished', 'Pigment settles unevenly on everyone, so the result you leave with is not the result you keep. The second sitting is already paid for.'],
      ['The consultation is not a sales call', 'Twenty minutes, free, same day as the treatment if you want. If your skin is wrong for a technique you will hear it here, not afterwards.']
    ],
    faq: [
      ['Which technique is right for me?', 'Microblading suits normal to dry skin and reads as individual hairs. Powder holds better on oily and mature skin and reads as soft makeup. Nano combines both. The consultation exists to answer exactly this and it is free.'],
      ['How long does it last?', 'Six to twenty-four months before you need a touch-up, and that range is about your skin, not the technique. Anyone who promises you a fixed number is selling.'],
      ['I have brows I am not happy with.', 'Correction work is possible and starts with a consultation to look at the existing pigment and shape. Redone brows for existing clients are $400.']
    ]
  },
  hairloss: {
    layout: 'clinical',
    label: 'Hair loss & scalp', nav: 'Hair loss', from: '$1,200', img: IMG.scalp,
    eyebrow: 'Scalp micropigmentation · Hairline to full head',
    h1: 'Stop planning your day around|how the light hits your scalp.',
    sub: 'Scalp micropigmentation gives the look of a closely cropped head of hair. One afternoon, no surgery, no recovery, and nothing to remember to take every morning. Financed in four payments up to $4,000.',
    picks: ['Scalp micropigmentation', 'Consultation'],
    points: [
      ['Nothing to keep up', 'No surgery, no daily foam, no tablets, no appointments you will resent in two years. Pigment placed to read as short hair against your scalp.'],
      ['You do not pay for it at once', 'Approved before your appointment, split into four. That covers hairline work through to full-head alopecia coverage.'],
      ['Men and women, no ceremony', 'Thinning at the part, a receding hairline, alopecia, scar coverage. The consultation is free and it is where you find out whether this is right for you.']
    ],
    faq: [
      ['How long does it last?', 'Years, and it fades gradually rather than falling out. Touch-ups keep the density where you want it.'],
      ['Will it look like a tattoo?', 'Not at conversational distance, which is the only distance that matters. Density and colour are matched to your own hair and skin.'],
      ['What does full coverage cost?', 'It starts at $1,200 and scales with the area: hairline, crown, back of the head, or full head. You get the number at the consultation, before you commit.']
    ]
  },
  laser: {
    layout: 'course',
    label: 'Laser hair removal', nav: 'Laser', from: '$75', img: IMG.legs,
    eyebrow: 'Face · Body · Packages of six',
    h1: 'A course, an end date, and then|you stop thinking about it.',
    sub: 'Priced per area, sold by the course, 20% off from six sessions. Ten minutes for lip and chin on your way home. You are told the realistic session count for your hair before you buy, not after session three.',
    picks: ['Armpit laser', 'Lip and chin laser', 'Full face laser', 'Extended bikini', 'Brazilian laser', 'Half leg', 'Full legs laser', 'Laser, 8 sessions'],
    points: [
      ['Nobody finishes in three', 'Almost no one clears in fewer than six sessions, so selling them one at a time would be dishonest. Six or more and the whole course drops 20%.'],
      ['Ten minutes for small areas', 'Lip and chin, armpits, bikini line. In and out on the way home.'],
      ['80 to 100% reduction', 'Across six to ten sessions, depending on the area and your hair. Annual touch-ups may be needed on legs.']
    ],
    faq: [
      ['Does it hurt?', 'Each session hurts less than the one before as there is less hair to treat. Small areas are over in ten minutes.'],
      ['How many will I need?', 'Six to eight for underarms, six to ten for legs and bikini, eight to ten for full face. Men need more sessions than women.'],
      ['Can I buy a whole body?', 'Yes: eight sessions covering lower body or upper body is $2,000 cash, $2,200 by card, Zelle or Venmo.']
    ]
  },
  skin: {
    layout: 'editorial',
    label: 'Facials & anti-aging', nav: 'Skin', from: '$70', img: IMG.dream,
    eyebrow: 'HydraFacial · Dermaplaning · Microneedling · RF',
    h1: 'Your skin on its best day,|not somebody else’s on theirs.',
    sub: 'Hydrafacials, dermaplaning, microneedling with stem cells and radio-frequency tightening, built around what your face is actually doing that week. From $70 for a mini to $300 for ninety minutes of everything.',
    picks: ['The Dream Facial', 'HydraFacial + dermaplaning', 'Microneedling facial + dermaplaning', 'Flawless signature facial', 'Radio-frequency facial', 'Dermaplaning only', 'The Beauty Nap', 'Mini / teen facial'],
    points: [
      ['Customised, then repeated', 'The signature facial is built around your skin on the day. Packages of four bring the price per visit down by a third.'],
      ['Told before, not after', 'Any face treatment can leave you red or breaking out, and microneedling stays red for one to three days. Do not book it the week of an event, and you will hear that here rather than at the door.'],
      ['Products you can take home', 'The Dream Facial includes travel sizes of the Lemieux products used on you.']
    ],
    faq: [
      ['How often can I have one?', 'These treatments are non-invasive, so as often as you like. Most people settle into one every four to six weeks.'],
      ['Which one should I start with?', 'The signature facial at $120 tells us both what your skin responds to. From there it is dermaplaning, hydrafacial or microneedling.'],
      ['Is there a package?', 'Four signature facials $380, four dermaplaning facials $480, four hydrafacial + dermaplaning + RF $600.']
    ]
  },
  body: {
    layout: 'course',
    label: 'Body & massage', nav: 'Body', from: '$120', img: IMG.sculpt,
    eyebrow: 'Sculpting · Lymphatic drainage · Massage',
    h1: 'One session will not do anything.|Ten will.',
    sub: 'Body sculpting, lymphatic drainage and massage. Ten sculpting sessions are $1,000, and that is the only way it is sold, because a single session of any of this is not worth your money.',
    picks: ['Body sculpting', 'Lymphatic drainage massage', 'Full body massage', '5 full body massages', 'Dermaplaning facial & body massage'],
    points: [
      ['Ten sessions, $1,000', 'Body sculpting is $135 a session or $1,000 for ten. Nothing about a single session is worth buying.'],
      ['One area at a time', 'Lymphatic drainage works best concentrated on a single area rather than spread across the body.'],
      ['Full body massage', 'Women only, existing clients or by recommendation. $60 deposit to hold the hour.']
    ],
    faq: [
      ['What does body sculpting actually do?', 'Reduces fat, tightens skin and defines muscle in a targeted area. Results build across the course rather than after one visit.'],
      ['Why is massage restricted?', 'It is offered to existing clients and personal recommendations only. It is a home studio, and that is the trade-off.'],
      ['Can I combine treatments?', 'Dermaplaning facial and body massage together is $230 for two hours.']
    ]
  },
  men: {
    layout: 'clinical',
    label: "Men's treatments", nav: 'For men', from: '$100', img: IMG.male,
    eyebrow: 'Scalp · Laser · Brows · Skin',
    h1: 'In, done, and back at work|the same afternoon.',
    sub: 'Scalp micropigmentation for thinning hair, laser priced honestly for denser growth, brows that read as your own. A private home studio, one client at a time, no salon floor to walk across.',
    picks: ['Scalp micropigmentation', 'Male laser hair removal', 'Microblading', 'Flawless signature facial', 'Consultation'],
    points: [
      ['Priced for more sessions', 'Male laser is quoted separately because denser hair needs more passes. Armpit $80, full back $230, full front $230, upper arms $100, full upper body $450.'],
      ['Hair loss, handled', 'Scalp micropigmentation from $1,200, financed in four payments, three hours, back at work the same day.'],
      ['Nobody can tell', 'The point of a good brow is that it reads as yours. Consultation first, free, no pressure.']
    ],
    faq: [
      ['Do many men come here?', "Enough that laser and scalp work are priced separately for them. It is a private home studio, not a salon floor."],
      ['How much for a full back?', '$230 per session for laser, with 20% off when you buy six or more.'],
      ['Will brows look obvious?', 'Shape and density are matched to your existing brow. The free consultation is where that gets agreed.']
    ]
  },
  bridal: {
    layout: 'editorial',
    label: 'Bridal', nav: 'Bridal', from: 'By the party', img: IMG.nap,
    eyebrow: 'Brows · Skin · Lashes · Groups',
    h1: 'The worst week to get your brows done|is the week of the wedding.',
    sub: 'Permanent makeup needs a touch-up four to six weeks after the first visit, so the timing matters more than anything else. Book the consultation ten to twelve weeks out and everything else follows.',
    picks: ['Microblading', 'Powder brows', 'Lip tint / blush', 'Lash lift and tint', 'The Dream Facial', 'HydraFacial + dermaplaning'],
    points: [
      ['Twelve weeks out', 'First session, then the included touch-up four to six weeks later, then a month to settle before the day.'],
      ['The party, at your place', 'House calls cover Long Island, New Jersey and Whitestone for groups of three or more, from $700.'],
      ['Skin on a schedule', 'A course of four facials in the run-up costs less per visit than four separately and gets your skin somewhere.']
    ],
    faq: [
      ['How far ahead should I book?', 'Ten to twelve weeks for permanent makeup. Facials and lashes can be much closer to the day.'],
      ['Can you come to us?', 'For three or more, in Long Island, New Jersey or Whitestone. Micropigmentation only, from $700, text to schedule.'],
      ['What about the bridesmaids?', 'Group quotes are provided the day of your inquiry: send the number of guests and desired treatments for exact pricing.']
    ]
  },
  recovery: {
    layout: 'clinical',
    label: 'Recovery after surgery', nav: 'After surgery', from: '$1,200', img: IMG.lymph,
    eyebrow: 'Post-lipo drainage · Lymphatic massage',
    h1: 'The part of the recovery|nobody warned you about.',
    sub: 'Manual lymphatic drainage after liposuction moves the fluid out that your body is struggling to shift on its own. Less swelling, less bruising, a shorter recovery, and considerably less discomfort getting there.',
    picks: ['Post-lipo massage, package of ten', 'Lymphatic drainage massage'],
    points: [
      ['Ten sessions, $1,200', '$900 if you pay cash. Recovery work is a course, not an appointment.'],
      ['Why it matters', 'Stimulating the lymphatic system drains excess fluid, which is what reduces swelling, bruising and discomfort.'],
      ['One area, properly', 'Concentrated on the area that was operated on rather than spread thin across the body.']
    ],
    faq: [
      ['When should I start?', 'As soon as your surgeon clears you. The earlier the drainage begins, the less fluid there is to move.'],
      ['How many sessions?', 'The package is ten, which is the usual course. Single sessions are $120 if you need to extend.'],
      ['Is it painful?', 'It is a light, rhythmic technique. It is not a deep tissue massage and it is not meant to hurt.']
    ]
  },
  house: {
    layout: 'course',
    label: 'House calls', nav: 'House calls', from: '$700', img: IMG.house,
    eyebrow: 'Long Island · New Jersey · Whitestone',
    h1: 'Get three of you together|and nobody has to drive.',
    sub: 'Micropigmentation at your address for groups of three or more in Long Island, New Jersey and Whitestone. $680 for the initial procedure including the second visit.',
    picks: ['House calls', 'Microblading', 'Powder brows', 'Consultation'],
    points: [
      ['From $700', '$680 for the initial procedure including the second visit. Touch-ups 6 to 18 months later are $350.'],
      ['Minimum three clients', 'The travel only works for a group. Gather three and the date is bookable.'],
      ['Micropigmentation only', 'Brows, lips and scalp travel. Laser, facials and body treatments stay in the studio.']
    ],
    faq: [
      ['Where do you travel?', 'Long Island, New Jersey and Whitestone. Anywhere else, ask.'],
      ['How do I book?', 'Text to schedule: house calls are arranged by message, not through the calendar. $100 deposit for new clients.'],
      ['Does the touch-up travel too?', 'Yes. The $680 initial price includes the second visit.']
    ]
  },
  training: {
    layout: 'course',
    label: 'Train with Aruna', nav: 'Training', from: '$1,800', img: IMG.training,
    eyebrow: 'Two days · Twelve hours of practice',
    h1: 'You already tattoo.|This is about making the strokes better.',
    sub: 'Perfecting Brows is for working artists who want crisper hairstrokes and softer powder. Twelve hours with a machine in your hand across two days, not twelve hours of slides. $1,800.',
    picks: ['Perfecting brows training', 'Consultation'],
    points: [
      ['For artists with experience', 'This is not a beginner course. It assumes you already tattoo and want the technique to be better.'],
      ['Twelve hours of practice', 'Two days, most of it with a machine in your hand rather than a slide deck in front of you.'],
      ['Space to teach', 'The studio is also rented out for workshops and classes if you run your own training.']
    ],
    faq: [
      ['Do I need previous experience?', 'Yes. Perfecting Brows assumes you already work and want to sharpen technique.'],
      ['What will I be able to do afterwards?', 'Natural, crisp hairstrokes and soft powder brows: the two techniques that make up most paid brow work.'],
      ['Can I rent the room?', 'Yes, the studio is available for your own courses and classes. Ask for dates.']
    ]
  }
};

export const SEG_ORDER = ['brows', 'hairloss', 'laser', 'skin', 'body', 'men', 'bridal', 'recovery', 'house', 'training'];

export const HOURS = [
  ['Monday', '12pm – 8pm'], ['Tuesday', '10.30am – 8pm'], ['Wednesday', '12pm – 8pm'],
  ['Thursday', '10.30am – 8pm'], ['Friday', '12pm – 8pm'], ['Saturday', '1pm – 3pm'], ['Sunday', 'Closed']
];

export function money(s) {
  if (s.price === 0) return s.label || 'Free';
  return '$' + s.price.toLocaleString('en-US') + (s.plus ? '+' : '');
}


// ── How pigment settles. The most-asked question in PMU and nobody publishes it.
export const SETTLING = [
  ['Day 1', 'Bold and sharp', 'Darker and more defined than the final result. This is pigment sitting on the surface as well as in the skin. It is meant to look like this.'],
  ['Days 2–5', 'Darkest point', 'Colour deepens before it lightens. Some tightness, no picking. This is the stage people panic about and the stage they should not.'],
  ['Days 5–10', 'Flaking', 'The surface layer sheds and takes some pigment with it. Patchy is normal here. Do not judge the work yet.'],
  ['Weeks 2–4', 'The ghost phase', 'Brows can look faint, even gone. Pigment is still settling in the deeper layer and comes back up.'],
  ['Weeks 4–6', 'Your second sitting', 'The included touch-up. This is where shape and density are finished, because now we can both see what your skin kept.'],
  ['Months 6–24', 'Real life', 'Gradual softening, not a grey line. How long yours holds is your skin, your sun exposure and your aftercare, never the technique you picked.']
];

// ── The decision the client is actually making.
export const TECHNIQUES = [
  { n: 'Microblading', price: '$580', skin: 'Normal to dry', look: 'Individual hairs', holds: '12–18 months', best: 'You want people to look twice and see hair, not makeup.' },
  { n: 'Powder brows', price: '$580', skin: 'Oily, mature, sensitive', look: 'Soft makeup finish', holds: '18–24 months', best: 'Microblading has failed on you before, or you already fill them in daily.' },
  { n: 'Nano-blading', price: '$650', skin: 'Most skin types', look: 'Crisp hairs, denser', holds: '12–24 months', best: 'You want microblading’s look with better retention. Manual and machine combined.' },
  { n: 'Combo', price: '$650', skin: 'Sparse or patchy brows', look: 'Hairs plus shading', holds: '18–24 months', best: 'There is very little brow to work with and shape has to be built.' }
];

export const AFTERCARE = [
  ['Keep it dry', 'Ten days. No swimming, no sauna, no steam, and keep your face out of the shower spray.'],
  ['Do not pick', 'The flaking will tempt you. Pulling a flake early pulls the pigment out with it and that is a patch you paid for.'],
  ['No sun, no acids', 'Two weeks minimum. Retinol, glycolic and vitamin C near the area will lift pigment. So will a sunbed.'],
  ['Sleep on your back', 'For the first few nights. A pillow pressed against fresh work moves pigment before it has settled.'],
  ['Expect to doubt it', 'Around week two it will look faint and you will assume it failed. It has not. Wait for your second sitting.']
];


// ═══════════════ i18n ═══════════════
export const T = {
  en: {
    langOther: 'ES', langOtherFull: 'Ver en español',
    navTreat: 'Treatments', navBrows: 'Brows', navHair: 'Hair loss', navLaser: 'Laser',
    navSkin: 'Skin', navStudio: 'Studio', navCta: 'Get my price',
    navHome: 'Home', navVisit: 'Visit', navCtaBook: 'Book',
    grpTreat: 'By treatment', grpWho: 'By who it is for', navAbout: 'About',
    navPackages: 'Packages', navResults: 'Results', navFinancing: 'Financing', navFaq: 'Questions',
    navAftercare: 'Aftercare', navGifts: 'Gift cards', ftSteps: 'Step by step',
    xsTitle: 'Also worth a look', xsBook: 'Book an appointment',
    detailNames: { microblading: 'Microblading', powder: 'Powder brows', nano: 'Nano brows', scalp: 'Scalp micropigmentation', lips: 'Lip neutralisation', laser: 'Laser course' },
    exEyebrow: 'Before you go', exH: 'Leave a number. Aruna calls you.',
    exSub: 'No booking, no deposit. A five-minute call about what you were pricing, usually the same day.',
    exName: 'Your name', exPhone: 'Your number', exCta: 'Call me back',
    exDoneH: 'Done. Expect a call.', exDoneB: 'Usually the same day, always within one business day.', exDoneCta: 'Back to the site',
    utilFinance: 'Pay in four. Approved before you arrive, $50 to $4,000.',
    utilToday: 'Today', utilClosed: 'Closed today',
    menuCount: 'treatments, not one of them price on request', menuAll: 'The complete list →',
    barCta: 'Price my treatment',
    barLines: { booking: '', aftercare: 'The ten days after, day by day', gifts: 'A gift that actually gets used', treatment: 'Every minute accounted for before you book', packages: 'Bought as a course, priced per visit', results: 'Photographed at six weeks, not six days', financing: 'Four payments, approved before you arrive', faq: 'Every answer in full, no phone call needed', about: 'Twelve years in one room, every price printed', visit: 'Free consultation before anything permanent', home: 'Know the number before you sit down', segment: 'Six questions and you will know the price', services: 'Every price above, or get yours in a minute', studio: 'Free consultation, same day if you want it', quote: '' },
    barSub: 'Free consultation · cash and card price shown together · pay in four',
    ftBlurb: 'A home studio on Staten Island doing permanent makeup, skin, laser and hair-loss work since 2014. One chair, one client, and every price printed.',
    ftTreat: 'Treatments', ftVisit: 'Visit', ftHours: 'Hours',
    ftCtaA: 'Every price is on this site.', ftCtaB: 'Start with yours.',
    ftBefore: 'Before you book', ftAfter: 'After your visit',
    ftStudio: 'The studio & policies', ftPrices: 'Full price list',
    ftRights: '© 2026 Aruna Spa. Prices shown are current booking prices.',
    ftFinance: 'Pay in four available on bookings from $50 to $4,000.',
    days: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], closed: 'Closed',
    heroEyebrow: 'Staten Island · since 2014 · forty-eight treatments',
    heroH1a: 'Nobody should be able', heroH1b: 'to tell', heroH1c: 'you had it done.',
    heroSub: 'Brows, lips, scalp, skin and laser in a Staten Island home studio since 2014. Every price is on this site, because you should know the number before you are sitting in the chair.',
    heroCall: 'Call the studio', heroChips: 'What made you look twice this morning?',
    statSince: 'On the same street, in the same room, since',
    statYears: 'Of combined experience behind the chair',
    statFree: 'Free', statFreeSub: 'Consultation, and it is not a sales appointment',
    statInc: 'Included', statIncSub: 'The second sitting that finishes the work',
    whyEyebrow: 'How the work gets done',
    whyH1a: 'The reason it looks', whyH1b: 'like', whyH1c: 'nothing happened.',
    whySub: 'You will be told what a treatment can and cannot do for your skin before you pay for it. Everything below is the reason that is possible.',
    why1t: 'Ninety minutes', why1b: 'That is how long a set of brows takes. Nobody is booked over the top of you, and nobody is rushing your shape to make the next appointment.',
    why2t: 'The second visit', why2b: 'Pigment settles unevenly on everybody, so one sitting is never the finished result. Your touch-up is already paid for. It is the work, not an upsell.',
    why3t: 'Both prices', why3b: 'Cash is lower on every permanent-makeup service, and you see both numbers before you choose. Nothing gets renegotiated when you arrive.',
    scalpEyebrow: 'Scalp micropigmentation',
    scalpH1a: 'A hairline back,', scalpH1b: 'without surgery.',
    scalpBody: 'For thinning at the part, a receding hairline, alopecia or scar coverage. Three hours, no surgery, no recovery, nothing to take every morning. Financed in four payments.',
    scalpMeta: 'and up · 180 minutes', scalpCta: 'Read about the treatment',
    dreamEyebrow: 'Ninety minutes of everything',
    dreamH1a: 'The Dream', dreamH1b: 'Facial.',
    dreamBody: 'Deep cleanse, hydrafacial, dermaplaning and radio-frequency massage across ninety minutes, then the Lemieux products used on your face, in travel sizes, to take with you.',
    dreamMeta: '90 minutes', dreamCta: 'All facials & skin',
    pmuEyebrow: 'Permanent makeup',
    pmuH1a: 'No treatment here', pmuH1b: 'is', pmuH1c: 'price on request.',
    pmuSub: 'How long yours lasts depends on your skin, not on the technique you picked. Anyone quoting you a fixed number of years is selling.',
    pmuAll: 'All forty-eight treatments',
    bookT: 'Before you book',
    bookB: 'New brow and PMU clients: a $150 fee applies to no-shows and cancellations inside 24 hours. Rescheduling takes five seconds and the slot goes to someone else.',
    tenEyebrow: 'Ten reasons people call',
    tenH1a: 'Start with what', tenH1b: 'is', tenH1c: 'bothering you.',
    tenSub: 'Each one opens a priced quote on that treatment. No consultation gate, no deposit, no “prices on request”.',
    ctaEyebrow: 'Six questions, no deposit',
    ctaH1a: 'Find out what yours', ctaH1b: 'costs', ctaH1c: 'before you call.',
    ctaSub: 'Six questions, your card price and cash price side by side, then a time. Nothing is held, nothing is charged, and no one calls you unless you ask.',
    ctaBtn: 'Price my treatment'
  },
  es: {
    langOther: 'EN', langOtherFull: 'Read in English',
    navTreat: 'Tratamientos', navBrows: 'Cejas', navHair: 'Cabello', navLaser: 'Láser',
    navSkin: 'Piel', navStudio: 'Estudio', navCta: 'Ver mi precio',
    navHome: 'Inicio', navVisit: 'Vis\u00edtanos', navCtaBook: 'Reservar',
    grpTreat: 'Por tratamiento', grpWho: 'Por a qui\u00e9n va dirigido', navAbout: 'Nosotras',
    navPackages: 'Paquetes', navResults: 'Resultados', navFinancing: 'A plazos', navFaq: 'Preguntas',
    navAftercare: 'Cuidados', navGifts: 'Tarjetas de regalo', ftSteps: 'Paso a paso',
    xsTitle: 'Tambi\u00e9n vale la pena', xsBook: 'Reservar una cita',
    detailNames: { microblading: 'Microblading', powder: 'Cejas powder', nano: 'Cejas nano', scalp: 'Micropigmentaci\u00f3n capilar', lips: 'Neutralizaci\u00f3n de labios', laser: 'Plan de l\u00e1ser' },
    exEyebrow: 'Antes de irte', exH: 'Deja un n\u00famero. Aruna te llama.',
    exSub: 'Sin reserva, sin dep\u00f3sito. Una llamada de cinco minutos sobre lo que estabas cotizando, normalmente el mismo d\u00eda.',
    exName: 'Tu nombre', exPhone: 'Tu n\u00famero', exCta: 'Ll\u00e1mame',
    exDoneH: 'Listo. Espera la llamada.', exDoneB: 'Normalmente el mismo d\u00eda, siempre dentro de un d\u00eda h\u00e1bil.', exDoneCta: 'Volver a la p\u00e1gina',
    utilFinance: 'Paga en cuatro. Aprobado antes de llegar, de $50 a $4,000.',
    utilToday: 'Hoy', utilClosed: 'Hoy cerrado',
    menuCount: 'tratamientos, y ninguno es «precio a consultar»', menuAll: 'La lista completa →',
    barCta: 'Ver mi precio',
    barLines: { booking: '', aftercare: 'Los diez d\u00edas despu\u00e9s, d\u00eda a d\u00eda', gifts: 'Un regalo que de verdad se usa', treatment: 'Cada minuto explicado antes de reservar', packages: 'Comprado por plan, con precio por visita', results: 'Fotografiado a las seis semanas, no a los seis días', financing: 'Cuatro pagos, aprobados antes de llegar', faq: 'Cada respuesta completa, sin llamar', about: 'Doce años en una sala, todos los precios por escrito', visit: 'Consulta gratuita antes de cualquier permanente', home: 'Conoce el número antes de sentarte', segment: 'Seis preguntas y sabrás el precio', services: 'Todos los precios arriba, o consigue el tuyo en un minuto', studio: 'Consulta gratuita, el mismo día si quieres', quote: '' },
    barSub: 'Consulta gratuita · precio en efectivo y con tarjeta juntos · paga en cuatro',
    ftBlurb: 'Un estudio en casa en Staten Island con maquillaje permanente, piel, láser y caída del cabello desde 2014. Una silla, una clienta, y todos los precios por escrito.',
    ftTreat: 'Tratamientos', ftVisit: 'Visítanos', ftHours: 'Horario',
    ftCtaA: 'Todos los precios están en esta página.', ftCtaB: 'Empieza por el tuyo.',
    ftBefore: 'Antes de reservar', ftAfter: 'Después de tu visita',
    ftStudio: 'El estudio y las políticas', ftPrices: 'Lista de precios completa',
    ftRights: '© 2026 Aruna Spa. Los precios mostrados son los precios vigentes de reserva.',
    ftFinance: 'Paga en cuatro disponible en reservas de $50 a $4,000.',
    days: ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'], closed: 'Cerrado',
    heroEyebrow: 'STATEN ISLAND · MAQUILLAJE PERMANENTE Y ESTÉTICA CLÍNICA · DESDE 2014',
    heroH1a: 'Despierta', heroH1b: 'Lista Cada', heroH1c: 'Mañana.',
    heroSub: 'Microblading de precisión, HydraFacials clínicos y depilación láser con diodo de grado médico por la especialista máster Mary Aruna. Todos los precios publicados sin presiones.',
    heroCtaPrimary: 'Reservar Cita',
    heroCtaSecondary: 'Explorar 32 Tratamientos',
    heroDirectCall: 'Línea Directa del Estudio',
    heroCall: 'Llama al estudio', heroChips: 'Explora por Objetivo de Belleza',
    bookOnline: 'Reservar en Línea',
    statSince: 'Atendiendo en Staten Island desde',
    statCount: 'Procedimientos verificados completados',
    statSterile: 'Material 100% estéril de grado médico',
    statPartner: 'Calificación 5.0 ★ · Le Mieux Partner',
    statYears: 'De experiencia combinada detrás de la silla',
    statFree: 'Gratis', statFreeSub: 'La consulta, y no es una cita de ventas',
    statInc: 'Incluida', statIncSub: 'La segunda sesión que termina el trabajo',
    whyEyebrow: 'EL ESTÁNDAR ARUNA',
    whyH1a: 'Tres Principios', whyH1b: 'Detrás de Cada', whyH1c: 'Tratamiento.',
    whySub: 'Te diremos exactamente qué puede y qué no puede hacer un tratamiento en tu piel antes de que pagues. Una clienta a la vez en nuestro estudio privado.',
    why1t: 'Santuario Exclusivo Uno a Uno', why1b: 'Cada sesión de cejas, piel o láser tiene reservados de 60 a 180 minutos sin interrupciones. Una sola clienta a la vez, cero salas de espera llenas y cero prisas.',
    why2t: 'Retoque de Perfección Incluido', why2b: 'El pigmento se asienta de forma única en cada piel. Tu segunda visita de perfeccionamiento está integrada en el paquete inicial de PMU. Es parte del oficio, no un extra.',
    why3t: 'Precios Claros en Tarjeta y Efectivo', why3b: 'Descuentos transparentes en efectivo en todos los tratamientos permanentes y planes por sesiones. Los dos precios publicados sin cobros sorpresa.',
    scalpEyebrow: 'CAÍDA DEL CABELLO Y MICROPIGMENTACIÓN CAPILAR',
    scalpH1a: 'Una Línea Frontal Natural,', scalpH1b: 'Sin Cirugía.',
    scalpBody: 'Para entradas, pérdida de densidad en la raya, alopecia o cobertura de cicatrices. Réplica no invasiva de folículos en una sola tarde sin tiempo de reposo quirúrgico. Financiado en 4 pagos.',
    scalpMeta: 'Desde $1,200 · 180 minutos', scalpCta: 'Ver Tarifas de Micropigmentación',
    dreamEyebrow: 'TRANSFORMACIÓN CLÍNICA DE LA PIEL',
    dreamH1a: 'El Dream Facial', dreamH1b: 'de 90 Minutos.',
    dreamBody: 'Limpieza profunda de poros, infusión vortex HydraFacial, exfoliación dermaplaning y masaje antiedad con radiofrecuencia. Incluye kit de viaje de cortesía con nuestros productos clínicos Le Mieux.',
    dreamMeta: 'Sesión completa de 90 minutos · $300', dreamCta: 'Explorar Todos los Faciales Clínicos',
    pmuEyebrow: 'TARIFAS TRANSPARENTES',
    pmuH1a: 'Sin Cobros Ocultos.', pmuH1b: 'Ningún Precio', pmuH1c: '«A Consultar».',
    pmuSub: 'La duración del pigmento depende de tu tipo de piel y de tus cuidados posteriores, nunca de palabras comerciales. Todas las tarifas están a la vista.',
    pmuAll: 'Ver las 32 Tarifas Verificadas',
    bookT: 'Política de Reserva para Clientas Nuevas',
    bookB: 'Reservamos tiempo de estudio exclusivo para ti. Se aplica una tarifa de $150 únicamente por ausencia o cancelación con menos de 24 horas. Reagendar toma cinco segundos.',
    tenEyebrow: 'EXPLORA POR OBJETIVO',
    tenH1a: 'Encuentra el Tratamiento', tenH1b: 'Perfecto Para Tu', tenH1c: 'Rutina Diaria.',
    tenSub: 'Cada especialidad incluye precios completos publicados, duración y cuidados posteriores.',
    ctaEyebrow: 'PRESUPUESTO INSTANTÁNEO',
    ctaH1a: 'Conoce Tu Precio', ctaH1b: 'Antes de Sentarte', ctaH1c: 'en la Silla.',
    ctaSub: 'Calcula el precio exacto de tu tratamiento, compara el ahorro en efectivo vs tarjeta y reserva directamente con la Especialista Máster Mary Aruna.',
    ctaBtn: 'Calcular Mi Precio'
  }
};

export const SEG_LABELS_ES = {
  brows: ['Cejas y PMU', 'Cejas y maquillaje permanente'],
  hairloss: ['Caída del cabello', 'Cabello y cuero cabelludo'],
  laser: ['Depilación láser', 'Depilación láser'],
  skin: ['Faciales', 'Faciales y antiedad'],
  body: ['Cuerpo y masaje', 'Cuerpo y masaje'],
  men: ['Hombres', 'Tratamientos para hombres'],
  bridal: ['Novias', 'Novias y damas'],
  recovery: ['Post-cirugía', 'Recuperación post-cirugía'],
  house: ['A domicilio', 'A domicilio, tres o más'],
  training: ['Cursos', 'Fórmate con Aruna']
};


// Spanish landing-page content, mirroring SEGMENTS.
export const SEGMENTS_ES = {
  brows: {
    eyebrow: 'Microblading · Powder · Nano · Labios · Delineado',
    h1: 'Todos pensarán que dormiste bien,|y nadie preguntará qué te hiciste.',
    sub: 'Cejas, labios y delineado hechos a mano en un estudio de Staten Island desde 2014. Tu segunda sesión ya está incluida, en efectivo cuesta menos, y te decimos qué va a retener tu piel antes de que pagues.',
    points: [
      ['No vas a parecer «hecha»', 'La forma se dibuja y se acuerda contigo antes del primer trazo. Si algo no te convence en esa etapa, cambiarlo no cuesta nada.'],
      ['Una sesión nunca basta', 'El pigmento se asienta distinto en cada piel, así que el resultado con el que sales no es el que te queda. La segunda sesión ya está pagada.'],
      ['La consulta no es una venta', 'Veinte minutos, gratis, el mismo día del tratamiento si quieres. Si tu piel no es adecuada para una técnica, lo sabrás aquí y no después.']
    ],
    faq: [
      ['¿Qué técnica me conviene?', 'Microblading va bien en piel normal a seca y se ve pelo a pelo. Powder aguanta mejor en piel grasa y madura y se ve como maquillaje suave. Nano combina las dos. La consulta existe justo para esto y es gratuita.'],
      ['¿Cuánto dura?', 'De seis a veinticuatro meses antes de necesitar un retoque, y ese rango lo decide tu piel, no la técnica. Quien te prometa un número fijo te está vendiendo algo.'],
      ['Tengo cejas que no me gustan.', 'La corrección es posible y empieza con una consulta para ver el pigmento y la forma actuales. Rehacer cejas de clientas existentes cuesta $400.']
    ]
  },
  hairloss: {
    eyebrow: 'Micropigmentación capilar · De entradas a cabeza completa',
    h1: 'Deja de planear tu día según|cómo te da la luz en la cabeza.',
    sub: 'La micropigmentación capilar da el aspecto de cabello muy corto. Una tarde, sin cirugía, sin recuperación y sin nada que recordar tomar cada mañana. Financiado en cuatro pagos hasta $4,000.',
    points: [
      ['Nada que mantener', 'Sin cirugía, sin espuma diaria, sin pastillas y sin citas que vas a odiar en dos años. Pigmento colocado para leerse como cabello corto.'],
      ['No lo pagas de golpe', 'Aprobado antes de tu cita y dividido en cuatro. Cubre desde la línea frontal hasta cobertura completa por alopecia.'],
      ['Hombres y mujeres', 'Densidad en la raya, entradas, alopecia, cicatrices. La consulta es gratuita y es donde sabrás si esto es para ti.']
    ],
    faq: [
      ['¿Cuánto dura?', 'Años, y se desvanece poco a poco en lugar de caerse. Los retoques mantienen la densidad donde la quieres.'],
      ['¿Se va a ver como un tatuaje?', 'No a distancia de conversación, que es la única que importa. La densidad y el color se ajustan a tu propio cabello y piel.'],
      ['¿Cuánto cuesta la cobertura completa?', 'Empieza en $1,200 y sube según el área: línea frontal, coronilla, parte de atrás o cabeza completa. El número exacto lo tienes en la consulta, antes de comprometerte.']
    ]
  },
  laser: {
    eyebrow: 'Cara · Cuerpo · Paquetes de seis',
    h1: 'Un plan, una fecha de fin,|y después deja de pensarlo.',
    sub: 'Precio por zona, vendido por sesiones, 20% menos desde seis. Diez minutos para labio y mentón de camino a casa. Te decimos cuántas sesiones necesita tu pelo antes de comprar, no en la tercera.',
    points: [
      ['Nadie termina en tres', 'Casi nadie queda limpia en menos de seis sesiones, así que venderlas de una en una sería deshonesto. Desde seis, todo el plan baja 20%.'],
      ['Diez minutos las zonas pequeñas', 'Labio y mentón, axilas, línea del bikini. Entras y sales de camino a casa.'],
      ['80 a 100% menos vello', 'En seis a diez sesiones según la zona y tu pelo. Las piernas pueden necesitar un retoque anual.']
    ],
    faq: [
      ['¿Duele?', 'Cada sesión duele menos que la anterior porque queda menos vello. Las zonas pequeñas se acaban en diez minutos.'],
      ['¿Cuántas voy a necesitar?', 'Seis a ocho para axilas, seis a diez para piernas y bikini, ocho a diez para cara completa. Los hombres necesitan más sesiones.'],
      ['¿Puedo comprar cuerpo completo?', 'Sí. Ocho sesiones de cuerpo inferior o superior son $2,000 en efectivo, $2,200 con tarjeta, Zelle o Venmo.']
    ]
  },
  skin: {
    eyebrow: 'HydraFacial · Dermaplaning · Microneedling · RF',
    h1: 'Tu piel en su mejor día,|no la de otra en el suyo.',
    sub: 'Hydrafaciales, dermaplaning, microneedling con células madre y radiofrecuencia, adaptados a lo que está haciendo tu cara esa semana. Desde $70 por un mini hasta $300 por noventa minutos de todo.',
    points: [
      ['Personalizado, y repetido', 'El facial de firma se construye según tu piel ese día. Los paquetes de cuatro bajan el precio por visita un tercio.'],
      ['Te lo decimos antes', 'Cualquier tratamiento facial puede dejarte roja o con brotes, y el microneedling queda rojo de uno a tres días. No lo reserves la semana de un evento.'],
      ['Productos para llevar', 'El Dream Facial incluye tamaños de viaje de los productos Lemieux que usamos en tu piel.']
    ],
    faq: [
      ['¿Cada cuánto puedo hacerlo?', 'No son invasivos, así que tan seguido como quieras. La mayoría se queda en uno cada cuatro a seis semanas.'],
      ['¿Por cuál empiezo?', 'El facial de firma de $120 nos dice a las dos cómo responde tu piel. De ahí pasamos a dermaplaning, hydrafacial o microneedling.'],
      ['¿Hay paquetes?', 'Cuatro faciales de firma $380, cuatro con dermaplaning $480, cuatro hydrafacial + dermaplaning + RF $600.']
    ]
  },
  body: {
    eyebrow: 'Moldeado · Drenaje linfático · Masaje',
    h1: 'Una sesión no va a hacer nada.|Diez sí.',
    sub: 'Moldeado corporal, drenaje linfático y masaje. Diez sesiones de moldeado son $1,000, y es la única forma en que se vende, porque una sola sesión de esto no vale tu dinero.',
    points: [
      ['Diez sesiones, $1,000', 'El moldeado son $135 por sesión o $1,000 por diez. Nada de una sola sesión vale la pena comprar.'],
      ['Una zona a la vez', 'El drenaje linfático funciona mejor concentrado en una zona que repartido por todo el cuerpo.'],
      ['Masaje de cuerpo completo', 'Solo mujeres, clientas existentes o por recomendación. $60 de depósito para reservar la hora.']
    ],
    faq: [
      ['¿Qué hace el moldeado?', 'Reduce grasa, tensa la piel y define músculo en una zona concreta. Los resultados se construyen a lo largo del plan, no en una visita.'],
      ['¿Por qué el masaje es restringido?', 'Se ofrece solo a clientas existentes y recomendaciones personales. Es un estudio en casa, y ese es el intercambio.'],
      ['¿Puedo combinar tratamientos?', 'Facial con dermaplaning y masaje corporal juntos son $230 por dos horas.']
    ]
  },
  men: {
    eyebrow: 'Cuero cabelludo · Láser · Cejas · Piel',
    h1: 'Entras, se hace, y vuelves|al trabajo esa misma tarde.',
    sub: 'Micropigmentación capilar para densidad, láser con precio honesto para vello más denso, cejas que se leen como las tuyas. Un estudio privado en casa, un cliente a la vez, sin salón que cruzar.',
    points: [
      ['Precio por más sesiones', 'El láser masculino se cotiza aparte porque el vello denso necesita más pasadas. Axila $80, espalda completa $230, frente completo $230, brazos $100, torso completo $450.'],
      ['La caída, resuelta', 'Micropigmentación capilar desde $1,200, en cuatro pagos, tres horas y de vuelta al trabajo el mismo día.'],
      ['Nadie lo nota', 'Una buena ceja se lee como la tuya. Consulta primero, gratis y sin presión.']
    ],
    faq: [
      ['¿Vienen muchos hombres?', 'Los suficientes para que el láser y el trabajo capilar tengan su propio precio. Es un estudio privado en casa, no un salón.'],
      ['¿Cuánto por la espalda completa?', '$230 por sesión de láser, con 20% menos comprando seis o más.'],
      ['¿Se van a notar las cejas?', 'La forma y la densidad se ajustan a tu ceja actual. La consulta gratuita es donde se acuerda.']
    ]
  },
  bridal: {
    eyebrow: 'Cejas · Piel · Pestañas · Grupos',
    h1: 'La peor semana para hacerte las cejas|es la semana de la boda.',
    sub: 'El maquillaje permanente necesita un retoque de cuatro a seis semanas después de la primera cita, así que el calendario importa más que nada. Reserva la consulta diez o doce semanas antes y todo lo demás encaja.',
    points: [
      ['Doce semanas antes', 'Primera sesión, el retoque incluido de cuatro a seis semanas después, y un mes para que asiente antes del día.'],
      ['El grupo, en tu casa', 'A domicilio en Long Island, Nueva Jersey y Whitestone para grupos de tres o más, desde $700.'],
      ['La piel con calendario', 'Un plan de cuatro faciales antes de la boda cuesta menos por visita que cuatro por separado y de verdad llega a algún sitio.']
    ],
    faq: [
      ['¿Con cuánta antelación reservo?', 'Diez a doce semanas para maquillaje permanente. Faciales y pestañas pueden ser mucho más cerca del día.'],
      ['¿Pueden venir a nosotras?', 'Para tres o más, en Long Island, Nueva Jersey o Whitestone. Solo micropigmentación, desde $700, se agenda por mensaje.'],
      ['¿Y las damas?', 'Los grupos se cotizan el mismo día de la consulta. Manda cuántas son y qué tratamientos y tendrás un precio.']
    ]
  },
  recovery: {
    eyebrow: 'Drenaje post-lipo · Masaje linfático',
    h1: 'La parte de la recuperación|de la que nadie te avisó.',
    sub: 'El drenaje linfático manual después de una liposucción saca el líquido que tu cuerpo está batallando por mover solo. Menos hinchazón, menos moretones, recuperación más corta y bastante menos molestia por el camino.',
    points: [
      ['Diez sesiones, $1,200', '$900 si pagas en efectivo. La recuperación es un plan, no una cita.'],
      ['Por qué importa', 'Estimular el sistema linfático drena el exceso de líquido, y eso es lo que reduce hinchazón, moretones y molestia.'],
      ['Una zona, bien hecha', 'Concentrado en el área operada en lugar de repartido por todo el cuerpo.']
    ],
    faq: [
      ['¿Cuándo empiezo?', 'En cuanto tu cirujano te autorice. Cuanto antes empiece el drenaje, menos líquido hay que mover.'],
      ['¿Cuántas sesiones?', 'El paquete son diez, que es el plan habitual. Las sesiones sueltas son $120 si necesitas extender.'],
      ['¿Duele?', 'Es una técnica ligera y rítmica. No es un masaje de tejido profundo y no está pensado para doler.']
    ]
  },
  house: {
    eyebrow: 'Long Island · Nueva Jersey · Whitestone',
    h1: 'Junta a tres de ustedes|y nadie tiene que conducir.',
    sub: 'Micropigmentación en tu dirección para grupos de tres o más en Long Island, Nueva Jersey y Whitestone. $680 por el procedimiento inicial incluyendo la segunda visita.',
    points: [
      ['Desde $700', '$680 por el procedimiento inicial incluyendo la segunda visita. Los retoques de 6 a 18 meses después son $350.'],
      ['Mínimo tres clientas', 'El viaje solo funciona con grupo. Junta a tres y la fecha se puede reservar.'],
      ['Solo micropigmentación', 'Cejas, labios y cuero cabelludo viajan. Láser, faciales y cuerpo se quedan en el estudio.']
    ],
    faq: [
      ['¿Hasta dónde viajan?', 'Long Island, Nueva Jersey y Whitestone. Cualquier otro sitio, pregunta.'],
      ['¿Cómo reservo?', 'Por mensaje de texto: los domicilios se agendan por mensaje, no por calendario. $100 de depósito para clientas nuevas.'],
      ['¿El retoque también viaja?', 'Sí. El precio inicial de $680 incluye la segunda visita.']
    ]
  },
  training: {
    eyebrow: 'Dos días · Doce horas de práctica',
    h1: 'Ya tatúas.|Esto es para mejorar el trazo.',
    sub: 'Perfecting Brows es para artistas que ya trabajan y quieren trazos más limpios y powder más suave. Doce horas con la máquina en la mano en dos días, no doce horas de diapositivas. $1,800.',
    points: [
      ['Para artistas con experiencia', 'No es un curso para principiantes. Da por hecho que ya tatúas y quieres mejorar la técnica.'],
      ['Doce horas de práctica', 'Dos días, y la mayor parte con una máquina en la mano en lugar de una presentación delante.'],
      ['Espacio para enseñar', 'El estudio también se renta para talleres y clases si das tu propia formación.']
    ],
    faq: [
      ['¿Necesito experiencia previa?', 'Sí. Perfecting Brows da por hecho que ya trabajas y quieres afinar la técnica.'],
      ['¿Qué podré hacer después?', 'Trazos naturales y limpios y powder suave: las dos técnicas que son la mayor parte del trabajo pagado de cejas.'],
      ['¿Puedo rentar la sala?', 'Sí, el estudio está disponible para tus propios cursos y clases. Pregunta por fechas.']
    ]
  }
};

export const SETTLING_ES = [
  ['Día 1', 'Intenso y definido', 'Más oscuro y más marcado que el resultado final. Es pigmento en la superficie además de en la piel. Tiene que verse así.'],
  ['Días 2–5', 'El punto más oscuro', 'El color se intensifica antes de aclararse. Algo de tirantez, sin rascar. Es la etapa que asusta y la que no debería.'],
  ['Días 5–10', 'Descamación', 'La capa superficial se cae y se lleva algo de pigmento. Verse irregular aquí es normal. Todavía no juzgues el trabajo.'],
  ['Semanas 2–4', 'La fase fantasma', 'Las cejas pueden verse tenues, casi ausentes. El pigmento sigue asentándose en la capa profunda y vuelve a subir.'],
  ['Semanas 4–6', 'Tu segunda sesión', 'El retoque incluido. Aquí se terminan forma y densidad, porque ahora las dos vemos qué retuvo tu piel.'],
  ['Meses 6–24', 'La vida real', 'Se suaviza poco a poco, no se pone gris. Cuánto te dura es tu piel, tu exposición al sol y tu cuidado, no la técnica que elegiste.']
];

export const TECHNIQUES_ES = [
  { n: 'Microblading', price: '$580', skin: 'Normal a seca', look: 'Pelo a pelo', holds: '12–18 meses', best: 'Quieres que miren dos veces y vean pelo, no maquillaje.' },
  { n: 'Powder brows', price: '$580', skin: 'Grasa, madura, sensible', look: 'Maquillaje suave', holds: '18–24 meses', best: 'El microblading ya te falló antes, o te las rellenas a diario.' },
  { n: 'Nano-blading', price: '$650', skin: 'Casi todo tipo de piel', look: 'Pelo nítido, más denso', holds: '12–24 meses', best: 'Quieres el aspecto del microblading con mejor retención. Manual y máquina.' },
  { n: 'Combo', price: '$650', skin: 'Cejas escasas o irregulares', look: 'Pelo más sombreado', holds: '18–24 meses', best: 'Hay muy poca ceja con la que trabajar y hay que construir la forma.' }
];

export const AFTERCARE_ES = [
  ['Mantenlo seco', 'Diez días. Sin piscina, sin sauna, sin vapor, y la cara fuera del chorro de la ducha.'],
  ['No te lo quites', 'La descamación te va a tentar. Arrancar una costra antes de tiempo se lleva el pigmento, y esa es una zona que pagaste.'],
  ['Sin sol ni ácidos', 'Dos semanas mínimo. Retinol, glicólico y vitamina C cerca de la zona levantan el pigmento. La cama solar también.'],
  ['Duerme boca arriba', 'Las primeras noches. Una almohada presionando trabajo reciente mueve el pigmento antes de que asiente.'],
  ['Vas a dudar', 'Sobre la segunda semana se verá tenue y asumirás que falló. No falló. Espera tu segunda sesión.']
];


export const SEG_FROM_ES = {
  brows: 'desde $580', hairloss: 'desde $1,200', laser: 'desde $75', skin: 'desde $70',
  body: 'desde $120', men: 'desde $100', bridal: 'por grupo', recovery: 'desde $1,200',
  house: 'desde $700', training: 'desde $1,800'
};

// ── 2. Spanish treatment notes, keyed by service name.
export const NOTES_ES = {
  'Consultation': 'Veinte minutos antes de cualquier procedimiento permanente. Clientas nuevas de cejas y PMU: $150 por ausencia o cancelaci\u00f3n con menos de 24 horas.',
  'Complimentary touch-up': 'V\u00e1lido de cuatro a seis semanas tras tu primera cita, ocho como m\u00e1ximo. Si no vienes se aplica el precio normal de retoque.',
  'Microblading': 'Trazos hechos a mano para una ceja m\u00e1s poblada y natural. Incluye el retoque dentro de cuatro semanas. Los siguientes retoques cada 6 a 24 meses seg\u00fan tu piel.',
  'Powder brows': 'Un acabado suave tipo maquillaje en lugar de pelo a pelo. Incluye el retoque dentro de cuatro semanas.',
  'Nano-blading brows': 'T\u00e9cnica manual y de m\u00e1quina combinadas.',
  'Lash effect / baby eyeliner': 'Delineado semipermanente que no se corre. Define la l\u00ednea de las pesta\u00f1as sin verse dibujado.',
  'Lip tint / blush': 'Dos sesiones. Algunas pieles necesitan una tercera o cuarta pasada seg\u00fan la retenci\u00f3n del pigmento y el cuidado posterior.',
  'Lip neutralisation': 'Corrige pigmento oscuro o irregular antes del color. Pueden hacer falta de tres a cinco sesiones.',
  'Annual lip tint touch-up': 'Para 12 a 24 meses despu\u00e9s del procedimiento inicial.',
  'Microblading / powder touch-up': 'De 6 a 18 meses despu\u00e9s del procedimiento inicial. No incluye otro retoque. Rehacer cejas de clientas existentes $400.',
  'Combo / micro-nano touch-up': 'De 6 a 18 meses despu\u00e9s del procedimiento inicial. Retoque adicional $100 si hace falta.',
  'Annual lash / eyeliner touch-up': 'Para 12 a 24 meses despu\u00e9s del procedimiento inicial.',
  'Scalp micropigmentation': 'El aspecto de un corte de pelo muy corto, sin cirug\u00eda. Desde entradas hasta cobertura completa por alopecia.',
  'Dermaplaning only': 'Exfoliaci\u00f3n manual: piel muerta y vello fino fuera, brillo inmediato.',
  'Mini facial': 'La versi\u00f3n corta: limpieza, exfoliaci\u00f3n e hidrataci\u00f3n.',
  'Lash lift and tint': 'Riza y oscurece tus propias pesta\u00f1as. Dura de 6 a 12 semanas seg\u00fan tu ciclo.',
  'Lymphatic facial massage': 'Drenaje suave y r\u00edtmico para bajar la hinchaz\u00f3n.',
  'Flawless signature facial': 'Limpieza profunda dise\u00f1ada para tu piel. Espera algo de rojez tras cualquier tratamiento facial.',
  'Just microneedling': 'C\u00e9lulas madre, doble limpieza, exfoliaci\u00f3n y dermaplaning.',
  'Radio-frequency facial': 'Tensado de piel para cara y cuello.',
  'Flawless facial + dermaplaning': 'El facial de firma con exfoliaci\u00f3n manual encima.',
  'HydraFacial + dermaplaning': 'Limpia, exfolia, extrae e hidrata. Inmediato y duradero.',
  'The Beauty Nap': 'Facial con dermaplaning y masaje de cuello, hombros, brazos y pies. $100 de dep\u00f3sito.',
  'The Dream Facial': 'Limpieza profunda, hydrafacial, dermaplaning, masaje antiedad de radiofrecuencia y un kit de viaje de los productos Lemieux que usamos en ti.',
  'Microneedling facial + dermaplaning': 'Con c\u00e9lulas madre. Inducci\u00f3n de col\u00e1geno para textura, firmeza y l\u00edneas finas. La piel queda roja de uno a tres d\u00edas.',
  'Armpit laser': '6 a 8 sesiones para reducir del 80 al 100% del vello. 20% menos en paquetes de seis o m\u00e1s.',
  'Lip and chin laser': '6 a 10 sesiones para hasta 80% menos vello. 20% menos en paquetes de seis o m\u00e1s.',
  'Male laser hair removal': 'Los hombres necesitan m\u00e1s sesiones. Axila $80, espalda completa $230, frente completo $230, brazos $100, torso completo $450.',
  'Half leg': 'Inferior $125, superior $135. De 6 a 10 sesiones.',
  'Extended bikini': '6 a 10 sesiones para reducir del 80 al 100%.',
  'Full face laser': '8 a 10 sesiones para reducir del 80 al 100%.',
  'Brazilian laser': '6 a 10 sesiones para reducir del 80 al 100%.',
  'Full legs laser': '6 a 10 sesiones, sin recuperaci\u00f3n; pueden hacer falta retoques anuales.',
  'Lymphatic drainage massage': 'Una zona por sesi\u00f3n para el mejor resultado.',
  'Full body massage': 'Solo mujeres, clientas existentes o por recomendaci\u00f3n. $60 de dep\u00f3sito.',
  'Body sculpting': 'Moldeado para reducir grasa, tensar la piel y definir m\u00fasculo. Paquete de diez $1,000.',
  'Post-lipo massage, package of ten': 'Baja la hinchaz\u00f3n y los moretones tras una liposucci\u00f3n drenando el exceso de l\u00edquido. Recuperaci\u00f3n m\u00e1s r\u00e1pida y menos molestia.',
  'Dermaplaning facial & body massage': 'Dos tratamientos, una sola cita.',
  '4 signature facials': 'Paquete de cuatro.',
  'Microneedling special, 3 sessions': 'Tres sesiones con c\u00e9lulas madre, incluyendo dermaplaning y extracciones.',
  '4 dermaplaning facials, deep hydration': 'Paquete de cuatro, facial completo con dermaplaning e hidrataci\u00f3n profunda.',
  '4 HydraFacial + dermaplaning + RF': 'Paquete de cuatro.',
  'Laser, 8 sessions': 'Cuerpo inferior (brasile\u00f1o, piernas completas) o superior (axilas, cara). $2,000 en efectivo, $2,200 con tarjeta, Zelle o Venmo.',
  'Perfecting brows training': 'Dos d\u00edas, doce horas de pr\u00e1ctica, para artistas con experiencia previa. Trazos naturales n\u00edtidos y powder suave.',
  'House calls': 'Long Island, Nueva Jersey y Whitestone, m\u00ednimo tres clientas. $680 el procedimiento inicial incluyendo la segunda visita; retoques de 6 a 18 meses despu\u00e9s $350. Solo micropigmentaci\u00f3n. $100 de dep\u00f3sito para clientas nuevas. Se agenda por mensaje.'
};
