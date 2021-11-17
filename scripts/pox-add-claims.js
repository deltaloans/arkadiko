// node proposal-emergency-shutdown.js
require('dotenv').config();
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const tx = require('@stacks/transactions');
const utils = require('./utils');
const network = utils.resolveNetwork();
const BN = require('bn.js');

async function transact() {
  const list = tx.listCV([
    tx.tupleCV({ 'to': tx.uintCV(2), 'ustx': tx.uintCV(721337) }),
    tx.tupleCV({ 'to': tx.uintCV(3), 'ustx': tx.uintCV(14427) }),
    tx.tupleCV({ 'to': tx.uintCV(4), 'ustx': tx.uintCV(14427) }),
    tx.tupleCV({ 'to': tx.uintCV(5), 'ustx': tx.uintCV(14427) }),
    tx.tupleCV({ 'to': tx.uintCV(6), 'ustx': tx.uintCV(14427) }),
    tx.tupleCV({ 'to': tx.uintCV(8), 'ustx': tx.uintCV(14427) }),
    tx.tupleCV({ 'to': tx.uintCV(9), 'ustx': tx.uintCV(14427) }),
    tx.tupleCV({ 'to': tx.uintCV(10), 'ustx': tx.uintCV(14427) }),
    tx.tupleCV({ 'to': tx.uintCV(12), 'ustx': tx.uintCV(14427) }),
    tx.tupleCV({ 'to': tx.uintCV(13), 'ustx': tx.uintCV(21640116) }),
    tx.tupleCV({ 'to': tx.uintCV(14), 'ustx': tx.uintCV(18033) }),
    tx.tupleCV({ 'to': tx.uintCV(15), 'ustx': tx.uintCV(18033430) }),
    tx.tupleCV({ 'to': tx.uintCV(16), 'ustx': tx.uintCV(901635424) }),
    tx.tupleCV({ 'to': tx.uintCV(18), 'ustx': tx.uintCV(72133719) }),
    tx.tupleCV({ 'to': tx.uintCV(20), 'ustx': tx.uintCV(5770697541) }),
    tx.tupleCV({ 'to': tx.uintCV(21), 'ustx': tx.uintCV(360669) }),
    tx.tupleCV({ 'to': tx.uintCV(22), 'ustx': tx.uintCV(26999147) }),
    tx.tupleCV({ 'to': tx.uintCV(23), 'ustx': tx.uintCV(36067) }),
    tx.tupleCV({ 'to': tx.uintCV(24), 'ustx': tx.uintCV(52296946) }),
    tx.tupleCV({ 'to': tx.uintCV(27), 'ustx': tx.uintCV(20998707) }),
    tx.tupleCV({ 'to': tx.uintCV(28), 'ustx': tx.uintCV(36066860) }),
    tx.tupleCV({ 'to': tx.uintCV(29), 'ustx': tx.uintCV(3606686) }),
    tx.tupleCV({ 'to': tx.uintCV(30), 'ustx': tx.uintCV(201974414) }),
    tx.tupleCV({ 'to': tx.uintCV(31), 'ustx': tx.uintCV(216401) }),
    tx.tupleCV({ 'to': tx.uintCV(32), 'ustx': tx.uintCV(103151219) }),
    tx.tupleCV({ 'to': tx.uintCV(35), 'ustx': tx.uintCV(1442674385) }),
    tx.tupleCV({ 'to': tx.uintCV(36), 'ustx': tx.uintCV(1803342982) }),
    tx.tupleCV({ 'to': tx.uintCV(37), 'ustx': tx.uintCV(10820058) }),
    tx.tupleCV({ 'to': tx.uintCV(38), 'ustx': tx.uintCV(10820058) }),
    tx.tupleCV({ 'to': tx.uintCV(39), 'ustx': tx.uintCV(401146433) }),
    tx.tupleCV({ 'to': tx.uintCV(40), 'ustx': tx.uintCV(72133719) }),
    tx.tupleCV({ 'to': tx.uintCV(41), 'ustx': tx.uintCV(14809053) }),
    tx.tupleCV({ 'to': tx.uintCV(42), 'ustx': tx.uintCV(10921045) }),
    tx.tupleCV({ 'to': tx.uintCV(44), 'ustx': tx.uintCV(6852703331) }),
    tx.tupleCV({ 'to': tx.uintCV(47), 'ustx': tx.uintCV(3606686) }),
    tx.tupleCV({ 'to': tx.uintCV(48), 'ustx': tx.uintCV(3570619) }),
    tx.tupleCV({ 'to': tx.uintCV(49), 'ustx': tx.uintCV(360669) }),
    tx.tupleCV({ 'to': tx.uintCV(50), 'ustx': tx.uintCV(504936) }),
    tx.tupleCV({ 'to': tx.uintCV(51), 'ustx': tx.uintCV(360669) }),
    tx.tupleCV({ 'to': tx.uintCV(52), 'ustx': tx.uintCV(108200579) }),
    tx.tupleCV({ 'to': tx.uintCV(54), 'ustx': tx.uintCV(86560463) }),
    tx.tupleCV({ 'to': tx.uintCV(55), 'ustx': tx.uintCV(14066075) }),
    tx.tupleCV({ 'to': tx.uintCV(56), 'ustx': tx.uintCV(10820058) }),
    tx.tupleCV({ 'to': tx.uintCV(57), 'ustx': tx.uintCV(25246802) }),
    tx.tupleCV({ 'to': tx.uintCV(59), 'ustx': tx.uintCV(61313661) }),
    tx.tupleCV({ 'to': tx.uintCV(60), 'ustx': tx.uintCV(18033430) }),
    tx.tupleCV({ 'to': tx.uintCV(62), 'ustx': tx.uintCV(1262340) }),
    tx.tupleCV({ 'to': tx.uintCV(65), 'ustx': tx.uintCV(5345109) }),
    tx.tupleCV({ 'to': tx.uintCV(66), 'ustx': tx.uintCV(432802) }),
    tx.tupleCV({ 'to': tx.uintCV(67), 'ustx': tx.uintCV(1749243) }),
    tx.tupleCV({ 'to': tx.uintCV(68), 'ustx': tx.uintCV(3967355) }),
    tx.tupleCV({ 'to': tx.uintCV(69), 'ustx': tx.uintCV(7213372) }),
    tx.tupleCV({ 'to': tx.uintCV(70), 'ustx': tx.uintCV(367882) }),
    tx.tupleCV({ 'to': tx.uintCV(72), 'ustx': tx.uintCV(28853488) }),
    tx.tupleCV({ 'to': tx.uintCV(73), 'ustx': tx.uintCV(7574041) }),
    tx.tupleCV({ 'to': tx.uintCV(74), 'ustx': tx.uintCV(19836773) }),
    tx.tupleCV({ 'to': tx.uintCV(75), 'ustx': tx.uintCV(7574041) }),
    tx.tupleCV({ 'to': tx.uintCV(76), 'ustx': tx.uintCV(54821627) }),
    tx.tupleCV({ 'to': tx.uintCV(78), 'ustx': tx.uintCV(1788916) }),
    tx.tupleCV({ 'to': tx.uintCV(79), 'ustx': tx.uintCV(21647329) }),
    tx.tupleCV({ 'to': tx.uintCV(80), 'ustx': tx.uintCV(28853488) }),
    tx.tupleCV({ 'to': tx.uintCV(81), 'ustx': tx.uintCV(3606686) }),
    tx.tupleCV({ 'to': tx.uintCV(82), 'ustx': tx.uintCV(72134) }),
    tx.tupleCV({ 'to': tx.uintCV(83), 'ustx': tx.uintCV(1226273) }),
    tx.tupleCV({ 'to': tx.uintCV(85), 'ustx': tx.uintCV(360669) }),
    tx.tupleCV({ 'to': tx.uintCV(88), 'ustx': tx.uintCV(721337) }),
    tx.tupleCV({ 'to': tx.uintCV(89), 'ustx': tx.uintCV(9016715) }),
    tx.tupleCV({ 'to': tx.uintCV(92), 'ustx': tx.uintCV(3606686) }),
    tx.tupleCV({ 'to': tx.uintCV(93), 'ustx': tx.uintCV(255136965) }),
    tx.tupleCV({ 'to': tx.uintCV(94), 'ustx': tx.uintCV(721337193) }),
    tx.tupleCV({ 'to': tx.uintCV(95), 'ustx': tx.uintCV(59510318) }),
    tx.tupleCV({ 'to': tx.uintCV(96), 'ustx': tx.uintCV(40034214) }),
    tx.tupleCV({ 'to': tx.uintCV(97), 'ustx': tx.uintCV(73937062) }),
    tx.tupleCV({ 'to': tx.uintCV(99), 'ustx': tx.uintCV(353455) }),
    tx.tupleCV({ 'to': tx.uintCV(100), 'ustx': tx.uintCV(901671) }),
    tx.tupleCV({ 'to': tx.uintCV(101), 'ustx': tx.uintCV(721337193) }),
    tx.tupleCV({ 'to': tx.uintCV(102), 'ustx': tx.uintCV(353455) }),
    tx.tupleCV({ 'to': tx.uintCV(103), 'ustx': tx.uintCV(3246017) }),
    tx.tupleCV({ 'to': tx.uintCV(104), 'ustx': tx.uintCV(360668596) }),
    tx.tupleCV({ 'to': tx.uintCV(105), 'ustx': tx.uintCV(69609039) }),
    tx.tupleCV({ 'to': tx.uintCV(106), 'ustx': tx.uintCV(9035038) }),
    tx.tupleCV({ 'to': tx.uintCV(107), 'ustx': tx.uintCV(7213372) }),
    tx.tupleCV({ 'to': tx.uintCV(108), 'ustx': tx.uintCV(226388071) }),
    tx.tupleCV({ 'to': tx.uintCV(109), 'ustx': tx.uintCV(360669) }),
    tx.tupleCV({ 'to': tx.uintCV(110), 'ustx': tx.uintCV(3606686) }),
    tx.tupleCV({ 'to': tx.uintCV(112), 'ustx': tx.uintCV(25246802) }),
    tx.tupleCV({ 'to': tx.uintCV(114), 'ustx': tx.uintCV(36067) }),
    tx.tupleCV({ 'to': tx.uintCV(117), 'ustx': tx.uintCV(137054067) }),
    tx.tupleCV({ 'to': tx.uintCV(119), 'ustx': tx.uintCV(36066860) }),
    tx.tupleCV({ 'to': tx.uintCV(123), 'ustx': tx.uintCV(1442674) }),
    tx.tupleCV({ 'to': tx.uintCV(126), 'ustx': tx.uintCV(721337) }),
    tx.tupleCV({ 'to': tx.uintCV(127), 'ustx': tx.uintCV(4688692) }),
    tx.tupleCV({ 'to': tx.uintCV(128), 'ustx': tx.uintCV(43640900) }),
    tx.tupleCV({ 'to': tx.uintCV(129), 'ustx': tx.uintCV(6546135) }),
    tx.tupleCV({ 'to': tx.uintCV(132), 'ustx': tx.uintCV(418537873) }),
    tx.tupleCV({ 'to': tx.uintCV(133), 'ustx': tx.uintCV(30656831) }),
    tx.tupleCV({ 'to': tx.uintCV(136), 'ustx': tx.uintCV(6524495) }),
    tx.tupleCV({ 'to': tx.uintCV(137), 'ustx': tx.uintCV(721337) }),
    tx.tupleCV({ 'to': tx.uintCV(138), 'ustx': tx.uintCV(3606686) }),
    tx.tupleCV({ 'to': tx.uintCV(139), 'ustx': tx.uintCV(1262340) }),
    tx.tupleCV({ 'to': tx.uintCV(140), 'ustx': tx.uintCV(3797840) }),
    tx.tupleCV({ 'to': tx.uintCV(141), 'ustx': tx.uintCV(3361431) }),
    tx.tupleCV({ 'to': tx.uintCV(142), 'ustx': tx.uintCV(180334) }),
    tx.tupleCV({ 'to': tx.uintCV(143), 'ustx': tx.uintCV(3606686) }),
    tx.tupleCV({ 'to': tx.uintCV(144), 'ustx': tx.uintCV(360669) }),
    tx.tupleCV({ 'to': tx.uintCV(146), 'ustx': tx.uintCV(7574041) }),
    tx.tupleCV({ 'to': tx.uintCV(147), 'ustx': tx.uintCV(447229059) }),
    tx.tupleCV({ 'to': tx.uintCV(148), 'ustx': tx.uintCV(16951424) }),
    tx.tupleCV({ 'to': tx.uintCV(149), 'ustx': tx.uintCV(3606686) }),
    tx.tupleCV({ 'to': tx.uintCV(150), 'ustx': tx.uintCV(4503475) }),
    tx.tupleCV({ 'to': tx.uintCV(151), 'ustx': tx.uintCV(360669) }),
    tx.tupleCV({ 'to': tx.uintCV(152), 'ustx': tx.uintCV(396735456) }),
    tx.tupleCV({ 'to': tx.uintCV(154), 'ustx': tx.uintCV(22000784) }),
    tx.tupleCV({ 'to': tx.uintCV(155), 'ustx': tx.uintCV(36066860) }),
    tx.tupleCV({ 'to': tx.uintCV(156), 'ustx': tx.uintCV(18033430) }),
    tx.tupleCV({ 'to': tx.uintCV(157), 'ustx': tx.uintCV(22722122) }),
    tx.tupleCV({ 'to': tx.uintCV(158), 'ustx': tx.uintCV(64451478) }),
    tx.tupleCV({ 'to': tx.uintCV(159), 'ustx': tx.uintCV(18033430) }),
    tx.tupleCV({ 'to': tx.uintCV(161), 'ustx': tx.uintCV(36066860) }),
    tx.tupleCV({ 'to': tx.uintCV(162), 'ustx': tx.uintCV(2164011578) }),
    tx.tupleCV({ 'to': tx.uintCV(163), 'ustx': tx.uintCV(36067) }),
    tx.tupleCV({ 'to': tx.uintCV(165), 'ustx': tx.uintCV(4328023) }),
    tx.tupleCV({ 'to': tx.uintCV(168), 'ustx': tx.uintCV(252468017) }),
    tx.tupleCV({ 'to': tx.uintCV(169), 'ustx': tx.uintCV(22000784) }),
    tx.tupleCV({ 'to': tx.uintCV(170), 'ustx': tx.uintCV(37870203) }),
    tx.tupleCV({ 'to': tx.uintCV(171), 'ustx': tx.uintCV(6239567) }),
    tx.tupleCV({ 'to': tx.uintCV(172), 'ustx': tx.uintCV(1082006) }),
    tx.tupleCV({ 'to': tx.uintCV(174), 'ustx': tx.uintCV(9017609) }),
    tx.tupleCV({ 'to': tx.uintCV(175), 'ustx': tx.uintCV(721337) }),
    tx.tupleCV({ 'to': tx.uintCV(176), 'ustx': tx.uintCV(2524680) }),
    tx.tupleCV({ 'to': tx.uintCV(177), 'ustx': tx.uintCV(1767276) }),
    tx.tupleCV({ 'to': tx.uintCV(178), 'ustx': tx.uintCV(16590755) }),
    tx.tupleCV({ 'to': tx.uintCV(179), 'ustx': tx.uintCV(3606686) }),
    tx.tupleCV({ 'to': tx.uintCV(180), 'ustx': tx.uintCV(4609345) }),
    tx.tupleCV({ 'to': tx.uintCV(181), 'ustx': tx.uintCV(7220585) }),
    tx.tupleCV({ 'to': tx.uintCV(182), 'ustx': tx.uintCV(4147689) }),
    tx.tupleCV({ 'to': tx.uintCV(183), 'ustx': tx.uintCV(3314544) }),
    tx.tupleCV({ 'to': tx.uintCV(184), 'ustx': tx.uintCV(1442674) }),
    tx.tupleCV({ 'to': tx.uintCV(187), 'ustx': tx.uintCV(180334) }),
    tx.tupleCV({ 'to': tx.uintCV(188), 'ustx': tx.uintCV(6221533) }),
    tx.tupleCV({ 'to': tx.uintCV(189), 'ustx': tx.uintCV(66723690) }),
    tx.tupleCV({ 'to': tx.uintCV(190), 'ustx': tx.uintCV(2063024) }),
    tx.tupleCV({ 'to': tx.uintCV(194), 'ustx': tx.uintCV(27050145) }),
    tx.tupleCV({ 'to': tx.uintCV(195), 'ustx': tx.uintCV(10820058) }),
    tx.tupleCV({ 'to': tx.uintCV(196), 'ustx': tx.uintCV(1803343) }),
    tx.tupleCV({ 'to': tx.uintCV(197), 'ustx': tx.uintCV(14426744) }),
    tx.tupleCV({ 'to': tx.uintCV(198), 'ustx': tx.uintCV(4317203) }),
    tx.tupleCV({ 'to': tx.uintCV(199), 'ustx': tx.uintCV(10820058) }),
    tx.tupleCV({ 'to': tx.uintCV(200), 'ustx': tx.uintCV(270501) }),
    tx.tupleCV({ 'to': tx.uintCV(201), 'ustx': tx.uintCV(3606686) }),
    tx.tupleCV({ 'to': tx.uintCV(203), 'ustx': tx.uintCV(1583335) }),
    tx.tupleCV({ 'to': tx.uintCV(204), 'ustx': tx.uintCV(3988995) }),
    tx.tupleCV({ 'to': tx.uintCV(206), 'ustx': tx.uintCV(36067) }),
    tx.tupleCV({ 'to': tx.uintCV(207), 'ustx': tx.uintCV(36066860) }),
    tx.tupleCV({ 'to': tx.uintCV(208), 'ustx': tx.uintCV(577070) }),
    tx.tupleCV({ 'to': tx.uintCV(210), 'ustx': tx.uintCV(32445747) }),
    tx.tupleCV({ 'to': tx.uintCV(211), 'ustx': tx.uintCV(4609345) }),
    tx.tupleCV({ 'to': tx.uintCV(214), 'ustx': tx.uintCV(10820058) }),
    tx.tupleCV({ 'to': tx.uintCV(215), 'ustx': tx.uintCV(1803343) }),
    tx.tupleCV({ 'to': tx.uintCV(216), 'ustx': tx.uintCV(16230087) }),
    tx.tupleCV({ 'to': tx.uintCV(217), 'ustx': tx.uintCV(3787020) }),
    tx.tupleCV({ 'to': tx.uintCV(219), 'ustx': tx.uintCV(1262340) }),
    tx.tupleCV({ 'to': tx.uintCV(220), 'ustx': tx.uintCV(180334298) }),
    tx.tupleCV({ 'to': tx.uintCV(221), 'ustx': tx.uintCV(3606686) }),
    tx.tupleCV({ 'to': tx.uintCV(222), 'ustx': tx.uintCV(2164012) }),
    tx.tupleCV({ 'to': tx.uintCV(223), 'ustx': tx.uintCV(9016715) }),
    tx.tupleCV({ 'to': tx.uintCV(224), 'ustx': tx.uintCV(5860865) }),
    tx.tupleCV({ 'to': tx.uintCV(225), 'ustx': tx.uintCV(140661) }),
    tx.tupleCV({ 'to': tx.uintCV(226), 'ustx': tx.uintCV(180334) }),
    tx.tupleCV({ 'to': tx.uintCV(227), 'ustx': tx.uintCV(9377384) }),
    tx.tupleCV({ 'to': tx.uintCV(228), 'ustx': tx.uintCV(126234009) }),
    tx.tupleCV({ 'to': tx.uintCV(229), 'ustx': tx.uintCV(18033430) }),
    tx.tupleCV({ 'to': tx.uintCV(231), 'ustx': tx.uintCV(23623793) }),
    tx.tupleCV({ 'to': tx.uintCV(233), 'ustx': tx.uintCV(25607470) }),
    tx.tupleCV({ 'to': tx.uintCV(235), 'ustx': tx.uintCV(10820058) }),
    tx.tupleCV({ 'to': tx.uintCV(239), 'ustx': tx.uintCV(10820058) }),
    tx.tupleCV({ 'to': tx.uintCV(240), 'ustx': tx.uintCV(32712642) }),
    tx.tupleCV({ 'to': tx.uintCV(242), 'ustx': tx.uintCV(19396757) }),
    tx.tupleCV({ 'to': tx.uintCV(243), 'ustx': tx.uintCV(2524680) }),
    tx.tupleCV({ 'to': tx.uintCV(245), 'ustx': tx.uintCV(251386012) }),
    tx.tupleCV({ 'to': tx.uintCV(247), 'ustx': tx.uintCV(645597) }),
    tx.tupleCV({ 'to': tx.uintCV(248), 'ustx': tx.uintCV(68527) }),
    tx.tupleCV({ 'to': tx.uintCV(249), 'ustx': tx.uintCV(14908052) }),
    tx.tupleCV({ 'to': tx.uintCV(250), 'ustx': tx.uintCV(854785) }),
    tx.tupleCV({ 'to': tx.uintCV(251), 'ustx': tx.uintCV(157540994) }),
    tx.tupleCV({ 'to': tx.uintCV(252), 'ustx': tx.uintCV(27050145) }),
    tx.tupleCV({ 'to': tx.uintCV(253), 'ustx': tx.uintCV(901671) }),
    tx.tupleCV({ 'to': tx.uintCV(255), 'ustx': tx.uintCV(90167149) }),
    tx.tupleCV({ 'to': tx.uintCV(256), 'ustx': tx.uintCV(93773835) }),
    tx.tupleCV({ 'to': tx.uintCV(261), 'ustx': tx.uintCV(216401158) }),
    tx.tupleCV({ 'to': tx.uintCV(262), 'ustx': tx.uintCV(14426744) }),
    tx.tupleCV({ 'to': tx.uintCV(263), 'ustx': tx.uintCV(1623009) }),
    tx.tupleCV({ 'to': tx.uintCV(265), 'ustx': tx.uintCV(3606686) }),
    tx.tupleCV({ 'to': tx.uintCV(266), 'ustx': tx.uintCV(8219637) }),
    tx.tupleCV({ 'to': tx.uintCV(267), 'ustx': tx.uintCV(721337) }),
    tx.tupleCV({ 'to': tx.uintCV(269), 'ustx': tx.uintCV(7213372) }),
    tx.tupleCV({ 'to': tx.uintCV(270), 'ustx': tx.uintCV(43280232) })
  ]);
  const txOptions = {
    contractAddress: CONTRACT_ADDRESS,
    contractName: 'arkadiko-claim-yield-v1-1',
    functionName: 'add-claims',
    functionArgs: [list],
    senderKey: process.env.STACKS_PRIVATE_KEY,
    fee: new BN(250000, 10),
    postConditionMode: 1,
    network
  };

  const transaction = await tx.makeContractCall(txOptions);
  const result = tx.broadcastTransaction(transaction, network);
  await utils.processing(result, transaction.txid(), 0);
};

transact();
