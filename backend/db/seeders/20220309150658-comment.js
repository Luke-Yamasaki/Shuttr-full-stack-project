'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      { userId: 173, imageId: 134, content: 'amazing!' },
      { userId: 116, imageId: 162, content: 'stunning!' },
      { userId: 333, imageId: 87, content: 'astounding!' },
      { userId: 175, imageId: 16, content: 'astonishing!' },
      { userId: 197, imageId: 125, content: 'awe-inspiring!' },
      { userId: 234, imageId: 62, content: 'stupendous!' },
      { userId: 30, imageId: 87, content: 'staggering!' },
      { userId: 46, imageId: 88, content: 'extraordinary!' },
      { userId: 42, imageId: 88, content: 'incredible!' },
      { userId: 21, imageId: 1, content: 'unbelievable!' },
      { userId: 26, imageId: 167, content: 'magnificent!' },
      { userId: 44, imageId: 43, content: 'wonderful!' },
      { userId: 196, imageId: 76, content: 'spectacular!' },
      { userId: 122, imageId: 128, content: 'remarkable!' },
      { userId: 122, imageId: 119, content: 'phenomenal!' },
      { userId: 88, imageId: 163, content: 'prodigious!' },
      { userId: 93, imageId: 195, content: 'miraculous!' },
      { userId: 226, imageId: 121, content: 'sublime!' },
      { userId: 199, imageId: 139, content: 'formidable!' },
      { userId: 71, imageId: 172, content: 'imposing!' },
      { userId: 302, imageId: 65, content: 'impressive!' },
      { userId: 143, imageId: 29, content: 'mind-boggling!' },
      { userId: 245, imageId: 145, content: 'mind-blowing!' },
      { userId: 141, imageId: 133, content: 'out of this world!' },
      { userId: 192, imageId: 190, content: 'amazeballs!' },
      { userId: 214, imageId: 40, content: 'badass!' },
      { userId: 118, imageId: 61, content: 'wondrous!' },
      { userId: 177, imageId: 26, content: 'attractive!' },
      { userId: 361, imageId: 169, content: 'pretty!' },
      { userId: 361, imageId: 94, content: 'handsome!' },
      { userId: 30, imageId: 175, content: 'good-looking!' },
      { userId: 242, imageId: 166, content: 'nice-looking!' },
      { userId: 4, imageId: 183, content: 'pleasing!' },
      { userId: 383, imageId: 111, content: 'alluring!' },
      { userId: 136, imageId: 9, content: 'prepossessing!' },
      { userId: 31, imageId: 48, content: 'as pretty as a picture!' },
      { userId: 248, imageId: 165, content: 'lovely!' },
      { userId: 170, imageId: 156, content: 'charming!' },
      { userId: 301, imageId: 86, content: 'delightful!' },
      { userId: 155, imageId: 11, content: 'appealing!' },
      { userId: 285, imageId: 4, content: 'engaging!' },
      { userId: 167, imageId: 79, content: 'winsome!' },
      { userId: 268, imageId: 174, content: 'ravishing!' },
      { userId: 231, imageId: 118, content: 'gorgeous!' },
      { userId: 108, imageId: 33, content: 'heavenly!' },
      { userId: 393, imageId: 93, content: 'arresting!' },
      { userId: 31, imageId: 134, content: 'glamorous!' },
      { userId: 360, imageId: 196, content: 'irresistible!' },
      { userId: 20, imageId: 190, content: 'bewitching!' },
      { userId: 313, imageId: 113, content: 'beguiling!' },
      { userId: 321, imageId: 50, content: 'graceful!' },
      { userId: 176, imageId: 178, content: 'elegant!' },
      { userId: 119, imageId: 39, content: 'exquisite!' },
      { userId: 184, imageId: 188, content: 'aesthetic!' },
      { userId: 396, imageId: 43, content: 'artistic!' },
      { userId: 387, imageId: 164, content: 'decorative!' },
      { userId: 308, imageId: 56, content: 'bonny!' },
      { userId: 357, imageId: 65, content: 'hot!' },
      { userId: 174, imageId: 36, content: 'tasty!' },
      { userId: 90, imageId: 3, content: 'divine!' },
      { userId: 124, imageId: 184, content: 'knockout!' },
      { userId: 106, imageId: 198, content: 'drop-dead gorgeous!' },
      { userId: 357, imageId: 117, content: 'fanciable!' },
      { userId: 182, imageId: 26, content: 'beddable!' },
      { userId: 338, imageId: 200, content: 'easy on the eye!' },
      { userId: 150, imageId: 194, content: 'fit!' },
      { userId: 122, imageId: 33, content: 'smashing!' },
      { userId: 273, imageId: 105, content: 'cute!' },
      { userId: 348, imageId: 85, content: 'foxy!' },
      { userId: 8, imageId: 97, content: 'beaut!' },
      { userId: 370, imageId: 75, content: 'spunky!' },
      { userId: 270, imageId: 16, content: 'beauteous!' },
      { userId: 185, imageId: 169, content: 'comely!' },
      { userId: 283, imageId: 13, content: 'aesthetic !' },
      { userId: 97, imageId: 61, content: 'exhilaration!' },
      { userId: 37, imageId: 183, content: 'felicity!' },
      { userId: 147, imageId: 149, content: 'gossamer!' },
      { userId: 52, imageId: 67, content: 'halcyon!' },
      { userId: 42, imageId: 180, content: 'jubilation!' },
      { userId: 184, imageId: 26, content: 'languor!' },
      { userId: 372, imageId: 131, content: 'lassitude!' },
      { userId: 27, imageId: 4, content: 'love!' },
      { userId: 256, imageId: 179, content: 'lyrical!' },
      { userId: 27, imageId: 42, content: 'photogenic!' },
      { userId: 213, imageId: 4, content: 'rejuvenated!' },
      { userId: 149, imageId: 9, content: 'scenic!' },
      { userId: 111, imageId: 30, content: 'sprightly!' },
      { userId: 331, imageId: 24, content: 'vigorous!' },
      { userId: 295, imageId: 12, content: 'balletic!' },
      { userId: 297, imageId: 142, content: 'crescendo!' },
      { userId: 366, imageId: 45, content: 'deft!' },
      { userId: 147, imageId: 84, content: 'dulcet!' },
      { userId: 172, imageId: 169, content: 'euphonious!' },
      { userId: 331, imageId: 57, content: 'fugacious!' },
      { userId: 7, imageId: 120, content: 'gesticulate!' },
      { userId: 166, imageId: 22, content: 'hullabaloo!' },
      { userId: 105, imageId: 5, content: 'lamprophony!' },
      { userId: 396, imageId: 75, content: 'lilt!' },
      { userId: 283, imageId: 73, content: 'lissome!' },
      { userId: 228, imageId: 170, content: 'lithe!' },
      { userId: 5, imageId: 193, content: 'mellifluous!' },
      { userId: 309, imageId: 42, content: 'mondegreen!' },
      { userId: 346, imageId: 16, content: 'murmurous!' },
      { userId: 52, imageId: 93, content: 'nimble!' },
      { userId: 307, imageId: 31, content: 'onomatopoeia!' },
      { userId: 274, imageId: 38, content: 'percussive!' },
      { userId: 325, imageId: 39, content: 'resounding!' },
      { userId: 235, imageId: 86, content: 'ripple!' },
      { userId: 228, imageId: 193, content: 'saunter!' },
      { userId: 176, imageId: 115, content: 'susurrous!' },
      { userId: 217, imageId: 151, content: 'thunderous!' },
      { userId: 252, imageId: 5, content: 'tintinnabulation!' },
      { userId: 270, imageId: 160, content: 'wafture!' },
      { userId: 81, imageId: 190, content: 'abomination!' },
      { userId: 64, imageId: 198, content: 'beleaguer!' },
      { userId: 154, imageId: 100, content: 'brood!' },
      { userId: 260, imageId: 78, content: 'desuetude!' },
      { userId: 278, imageId: 162, content: 'desultory!' },
      { userId: 26, imageId: 4, content: 'elision!' },
      { userId: 256, imageId: 82, content: 'furtive!' },
      { userId: 143, imageId: 57, content: 'fuscous -!' },
      { userId: 100, imageId: 182, content: 'gambol!' },
      { userId: 130, imageId: 51, content: 'imbroglio!' },
      { userId: 167, imageId: 140, content: 'indoctrinate!' },
      { userId: 119, imageId: 97, content: 'insinuate!' },
      { userId: 15, imageId: 124, content: 'insouciance!' },
      { userId: 345, imageId: 150, content: 'inured!' },
      { userId: 88, imageId: 151, content: 'labyrinthine!' },
      { userId: 336, imageId: 185, content: 'malefactor!' },
      { userId: 276, imageId: 161, content: 'nemesis!' },
      { userId: 145, imageId: 143, content: 'pugnacious!' },
      { userId: 237, imageId: 185, content: 'pyrrhic!' },
      { userId: 267, imageId: 127, content: 'sorcery!' },
      { userId: 216, imageId: 157, content: 'subterfuge!' },
      { userId: 121, imageId: 51, content: 'surreptitious!' },
      { userId: 181, imageId: 80, content: 'trickery!' },
      { userId: 60, imageId: 103, content: 'untoward!' },
      { userId: 212, imageId: 89, content: 'woebegone!' },
      { userId: 389, imageId: 104, content: 'ailurophile!' },
      { userId: 330, imageId: 97, content: 'chatoyant!' },
      { userId: 147, imageId: 10, content: 'cynosure!' },
      { userId: 216, imageId: 32, content: 'so sick~~~' },
      { userId: 130, imageId: 180, content: 'so sick~~~' },
      { userId: 65, imageId: 81, content: 'so sick~~~' },
      { userId: 126, imageId: 105, content: 'so sick~~~' },
      { userId: 256, imageId: 94, content: 'Wow!' },
      { userId: 100, imageId: 33, content: 'Wow!' },
      { userId: 182, imageId: 187, content: 'Wow!' },
      { userId: 44, imageId: 13, content: 'Wow!' },
      { userId: 110, imageId: 31, content: 'Wow!' },
      { userId: 392, imageId: 42, content: 'This is so good!' },
      { userId: 278, imageId: 168, content: 'This is so good!' },
      { userId: 45, imageId: 49, content: 'This is so good!' },
      { userId: 349, imageId: 23, content: 'This is so good!' },
      { userId: 244, imageId: 141, content: 'This is so good!' },
      { userId: 49, imageId: 39, content: 'This is so good!' },
      { userId: 195, imageId: 3, content: 'This is so good!' },
      { userId: 306, imageId: 28, content: 'This is so good!' },
      { userId: 35, imageId: 184, content: 'This is so good!' },
      { userId: 329, imageId: 47, content: 'This is so good!' },
      { userId: 58, imageId: 93, content: 'This is so good!' },
      { userId: 239, imageId: 43, content: 'This is so good!' },
      { userId: 211, imageId: 34, content: 'This is so good!' },
      { userId: 344, imageId: 197, content: 'This is so good!' },
      { userId: 387, imageId: 40, content: 'This is so good!' },
      { userId: 222, imageId: 105, content: 'This is so good!' },
      { userId: 169, imageId: 61, content: 'This is so good!' },
      { userId: 108, imageId: 149, content: 'This is so good!' },
      { userId: 340, imageId: 113, content: 'effervescent !' },
      { userId: 360, imageId: 123, content: 'ethereal !' },
      { userId: 107, imageId: 72, content: 'evanescent !' },
      { userId: 180, imageId: 118, content: 'evocative!' },
      { userId: 180, imageId: 24, content: 'I get a sense of angst.' },
      { userId: 93, imageId: 101, content: 'I get a sense of aurora.' },
      { userId: 390, imageId: 151, content: 'I get a sense of axiom.' },
      { userId: 213, imageId: 144, content: 'I get a sense of becoming.' },
      { userId: 191, imageId: 13, content: 'I get a sense of blossom.' },
      { userId: 367, imageId: 158, content: 'I get a sense of brood.' },
      { userId: 296, imageId: 70, content: 'I get a sense of cherish.' },
      { userId: 166, imageId: 113, content: 'I get a sense of delicacy.' },
      { userId: 379, imageId: 125, content: 'I get a sense of elixir.' },
      { userId: 310, imageId: 143, content: 'I get a sense of galactic.' },
      { userId: 124, imageId: 79, content: 'I get a sense of hope.' },
      { userId: 348, imageId: 175, content: 'I get a sense of labyrinth.' },
      { userId: 75, imageId: 199, content: 'I get a sense of murder.' },
      { userId: 21, imageId: 84, content: 'I get a sense of nemesis.' },
      { userId: 33, imageId: 80, content: 'I get a sense of oblivion.' },
      { userId: 38, imageId: 187, content: 'I get a sense of paradox.' },
      { userId: 87, imageId: 57, content: 'I get a sense of philosophy.' },
      { userId: 49, imageId: 53, content: 'I get a sense of solitude.' },
      { userId: 32, imageId: 53, content: 'I get a sense of tryst.' },
      { userId: 277, imageId: 53, content: 'I get a sense of woebegone.' },
      { userId: 306, imageId: 113, content: 'I get a sense of bungalow.' },
      { userId: 26, imageId: 18, content: 'I get a sense of conflate.' },
      { userId: 285, imageId: 34, content: 'I get a sense of demure.' },
      { userId: 275, imageId: 163,content: 'I get a sense of effervescence.'},
      { userId: 186, imageId: 43, content: 'I get a sense of eloquence.' },
      { userId: 239, imageId: 189, content: 'I get a sense of epiphany.' },
      { userId: 37, imageId: 67, content: 'I get a sense of ephemeral.' },
      { userId: 305, imageId: 132, content: 'I get a sense of esoteric.' },
      { userId: 242, imageId: 36, content: 'I get a sense of ethereal.' },
      { userId: 105, imageId: 86, content: 'I get a sense of evocative.' },
      { userId: 342, imageId: 64, content: 'I get a sense of imbue.' },
      {
        userId: 105,
        imageId: 149,
        content: 'I get a sense of incendiary.'
      },
      { userId: 161, imageId: 133, content: 'I get a sense of leisure.' },
      {
        userId: 394,
        imageId: 90,
        content: 'I get a sense of luminescence.'
      },
      { userId: 254, imageId: 63, content: 'I get a sense of pinnacle.' },
      { userId: 344, imageId: 15, content: 'I get a sense of plethora.' },
      { userId: 3, imageId: 131, content: 'I get a sense of ripple.' },
      {
        userId: 108,
        imageId: 71,
        content: 'I get a sense of serendipity.'
      },
      {
        userId: 339,
        imageId: 196,
        content: 'I get a sense of silhouette.'
      },
      { userId: 29, imageId: 192, content: 'I get a sense of vestigial.' },
      {
        userId: 111,
        imageId: 41,
        content: 'I get a sense of wherewithal.'
      },
      { userId: 177, imageId: 23, content: 'I get a sense of affection.' },
      { userId: 354, imageId: 34, content: 'I get a sense of charm.' },
      { userId: 344, imageId: 119, content: 'I get a sense of comfort.' },
      { userId: 363, imageId: 10, content: 'I get a sense of compassion.' },
      { userId: 70, imageId: 50, content: 'I get a sense of elegance.' },
      {
        userId: 284,
        imageId: 130,
        content: 'I get a sense of equanimity.'
      },
      {
        userId: 280,
        imageId: 103,
        content: 'I get a sense of eudaimonia.'
      },
      { userId: 278, imageId: 90, content: 'I get a sense of euphoria.' },
      { userId: 241, imageId: 67, content: 'I get a sense of flourish.' },
      { userId: 233, imageId: 134, content: 'I get a sense of glamour.' },
      { userId: 157, imageId: 133, content: 'I get a sense of gorgeous.' },
      { userId: 216, imageId: 162, content: 'I get a sense of happiness.' },
      { userId: 381, imageId: 42, content: 'I get a sense of idyllic.' },
      { userId: 311, imageId: 104, content: 'I get a sense of love.' },
      { userId: 332, imageId: 195, content: 'I get a sense of peace.' },
      { userId: 120, imageId: 91, content: 'I get a sense of pristine.' },
      {
        userId: 163,
        imageId: 138,
        content: 'I get a sense of quintessential.'
      },
      { userId: 146, imageId: 84, content: 'I get a sense of sumptuous.' },
      {
        userId: 211,
        imageId: 103,
        content: 'I get a sense of tranquility.'
      },
      { userId: 299, imageId: 163, content: 'I get a sense of glory.' },
      {
        userId: 189,
        imageId: 143,
        content: 'This made me think of angst.'
      },
      {
        userId: 154,
        imageId: 41,
        content: 'This made me think of aurora.'
      },
      {
        userId: 294,
        imageId: 196,
        content: 'This made me think of axiom.'
      },
      {
        userId: 279,
        imageId: 62,
        content: 'This made me think of becoming.'
      },
      {
        userId: 255,
        imageId: 111,
        content: 'This made me think of blossom.'
      },
      { userId: 157, imageId: 55, content: 'This made me think of brood.' },
      {
        userId: 39,
        imageId: 96,
        content: 'This made me think of cherish.'
      },
      {
        userId: 348,
        imageId: 136,
        content: 'This made me think of delicacy.'
      },
      {
        userId: 218,
        imageId: 57,
        content: 'This made me think of elixir.'
      },
      {
        userId: 361,
        imageId: 97,
        content: 'This made me think of galactic.'
      },
      { userId: 295, imageId: 9, content: 'This made me think of hope.' },
      {
        userId: 44,
        imageId: 125,
        content: 'This made me think of labyrinth.'
      },
      {
        userId: 69,
        imageId: 118,
        content: 'This made me think of murder.'
      },
      {
        userId: 63,
        imageId: 196,
        content: 'This made me think of nemesis.'
      },
      {
        userId: 277,
        imageId: 43,
        content: 'This made me think of oblivion.'
      },
      {
        userId: 171,
        imageId: 87,
        content: 'This made me think of paradox.'
      },
      {
        userId: 307,
        imageId: 26,
        content: 'This made me think of philosophy.'
      },
      {
        userId: 248,
        imageId: 101,
        content: 'This made me think of solitude.'
      },
      { userId: 84, imageId: 71, content: 'This made me think of tryst.' },
      {
        userId: 284,
        imageId: 168,
        content: 'This made me think of woebegone.'
      },
      {
        userId: 162,
        imageId: 98,
        content: 'This made me think of bungalow.'
      },
      {
        userId: 258,
        imageId: 88,
        content: 'This made me think of conflate.'
      },
      {
        userId: 154,
        imageId: 44,
        content: 'This made me think of demure.'
      },
      {
        userId: 30,
        imageId: 50,
        content: 'This made me think of effervescence.'
      },
      {
        userId: 46,
        imageId: 140,
        content: 'This made me think of eloquence.'
      },
      {
        userId: 105,
        imageId: 97,
        content: 'This made me think of epiphany.'
      },
      {
        userId: 372,
        imageId: 60,
        content: 'This made me think of ephemeral.'
      },
      {
        userId: 243,
        imageId: 118,
        content: 'This made me think of esoteric.'
      },
      {
        userId: 141,
        imageId: 153,
        content: 'This made me think of ethereal.'
      },
      {
        userId: 81,
        imageId: 26,
        content: 'This made me think of evocative.'
      },
      { userId: 282, imageId: 11, content: 'This made me think of imbue.' },
      {
        userId: 202,
        imageId: 12,
        content: 'This made me think of incendiary.'
      },
      {
        userId: 235,
        imageId: 140,
        content: 'This made me think of leisure.'
      },
      {
        userId: 62,
        imageId: 194,
        content: 'This made me think of luminescence.'
      },
      {
        userId: 321,
        imageId: 35,
        content: 'This made me think of pinnacle.'
      },
      {
        userId: 365,
        imageId: 117,
        content: 'This made me think of plethora.'
      },
      {
        userId: 165,
        imageId: 114,
        content: 'This made me think of ripple.'
      },
      {
        userId: 326,
        imageId: 63,
        content: 'This made me think of serendipity.'
      },
      {
        userId: 189,
        imageId: 54,
        content: 'This made me think of silhouette.'
      },
      {
        userId: 102,
        imageId: 22,
        content: 'This made me think of vestigial.'
      },
      {
        userId: 127,
        imageId: 8,
        content: 'This made me think of wherewithal.'
      },
      {
        userId: 120,
        imageId: 13,
        content: 'This made me think of affection.'
      },
      { userId: 129, imageId: 53, content: 'This made me think of charm.' },
      {
        userId: 148,
        imageId: 134,
        content: 'This made me think of comfort.'
      },
      {
        userId: 319,
        imageId: 154,
        content: 'This made me think of compassion.'
      },
      {
        userId: 242,
        imageId: 42,
        content: 'This made me think of elegance.'
      },
      {
        userId: 188,
        imageId: 173,
        content: 'This made me think of equanimity.'
      },
      {
        userId: 276,
        imageId: 163,
        content: 'This made me think of eudaimonia.'
      },
      {
        userId: 377,
        imageId: 133,
        content: 'This made me think of euphoria.'
      },
      {
        userId: 350,
        imageId: 68,
        content: 'This made me think of flourish.'
      },
      {
        userId: 92,
        imageId: 15,
        content: 'This made me think of glamour.'
      },
      {
        userId: 197,
        imageId: 21,
        content: 'This made me think of gorgeous.'
      },
      {
        userId: 28,
        imageId: 161,
        content: 'This made me think of happiness.'
      },
      {
        userId: 323,
        imageId: 58,
        content: 'This made me think of idyllic.'
      },
      { userId: 32, imageId: 155, content: 'This made me think of love.' },
      { userId: 202, imageId: 89, content: 'This made me think of peace.' },
      {
        userId: 77,
        imageId: 63,
        content: 'This made me think of pristine.'
      },
      {
        userId: 387,
        imageId: 35,
        content: 'This made me think of quintessential.'
      },
      {
        userId: 99,
        imageId: 131,
        content: 'This made me think of sumptuous.'
      },
      {
        userId: 70,
        imageId: 33,
        content: 'This made me think of tranquility.'
      },
      {
        userId: 143,
        imageId: 194,
        content: 'This made me think of glory.'
      },
      {
        userId: 194,
        imageId: 61,
        content: 'This reminds me of the word angst.'
      },
      {
        userId: 141,
        imageId: 160,
        content: 'This reminds me of the word aurora.'
      },
      {
        userId: 228,
        imageId: 110,
        content: 'This reminds me of the word axiom.'
      },
      {
        userId: 383,
        imageId: 131,
        content: 'This reminds me of the word becoming.'
      },
      {
        userId: 203,
        imageId: 171,
        content: 'This reminds me of the word blossom.'
      },
      {
        userId: 355,
        imageId: 26,
        content: 'This reminds me of the word brood.'
      },
      {
        userId: 80,
        imageId: 122,
        content: 'This reminds me of the word cherish.'
      },
      {
        userId: 51,
        imageId: 47,
        content: 'This reminds me of the word delicacy.'
      },
      {
        userId: 301,
        imageId: 144,
        content: 'This reminds me of the word elixir.'
      },
      {
        userId: 64,
        imageId: 173,
        content: 'This reminds me of the word galactic.'
      },
      {
        userId: 393,
        imageId: 30,
        content: 'This reminds me of the word hope.'
      },
      {
        userId: 115,
        imageId: 63,
        content: 'This reminds me of the word labyrinth.'
      },
      {
        userId: 282,
        imageId: 129,
        content: 'This reminds me of the word murder.'
      },
      {
        userId: 271,
        imageId: 181,
        content: 'This reminds me of the word nemesis.'
      },
      {
        userId: 76,
        imageId: 137,
        content: 'This reminds me of the word oblivion.'
      },
      {
        userId: 248,
        imageId: 156,
        content: 'This reminds me of the word paradox.'
      },
      {
        userId: 125,
        imageId: 129,
        content: 'This reminds me of the word philosophy.'
      },
      {
        userId: 144,
        imageId: 119,
        content: 'This reminds me of the word solitude.'
      },
      {
        userId: 240,
        imageId: 6,
        content: 'This reminds me of the word tryst.'
      },
      {
        userId: 44,
        imageId: 150,
        content: 'This reminds me of the word woebegone.'
      },
      {
        userId: 200,
        imageId: 128,
        content: 'This reminds me of the word bungalow.'
      },
      {
        userId: 129,
        imageId: 41,
        content: 'This reminds me of the word conflate.'
      },
      {
        userId: 324,
        imageId: 121,
        content: 'This reminds me of the word demure.'
      },
      {
        userId: 126,
        imageId: 136,
        content: 'This reminds me of the word effervescence.'
      },
      {
        userId: 202,
        imageId: 105,
        content: 'This reminds me of the word eloquence.'
      },
      {
        userId: 60,
        imageId: 110,
        content: 'This reminds me of the word epiphany.'
      },
      {
        userId: 192,
        imageId: 143,
        content: 'This reminds me of the word ephemeral.'
      },
      {
        userId: 244,
        imageId: 200,
        content: 'This reminds me of the word esoteric.'
      },
      {
        userId: 315,
        imageId: 28,
        content: 'This reminds me of the word ethereal.'
      },
      {
        userId: 250,
        imageId: 187,
        content: 'This reminds me of the word evocative.'
      },
      {
        userId: 143,
        imageId: 154,
        content: 'This reminds me of the word imbue.'
      },
      {
        userId: 25,
        imageId: 115,
        content: 'This reminds me of the word incendiary.'
      },
      {
        userId: 91,
        imageId: 11,
        content: 'This reminds me of the word leisure.'
      },
      {
        userId: 26,
        imageId: 135,
        content: 'This reminds me of the word luminescence.'
      },
      {
        userId: 370,
        imageId: 3,
        content: 'This reminds me of the word pinnacle.'
      },
      {
        userId: 214,
        imageId: 148,
        content: 'This reminds me of the word plethora.'
      },
      {
        userId: 184,
        imageId: 170,
        content: 'This reminds me of the word ripple.'
      },
      {
        userId: 69,
        imageId: 169,
        content: 'This reminds me of the word serendipity.'
      },
      {
        userId: 10,
        imageId: 24,
        content: 'This reminds me of the word silhouette.'
      },
      {
        userId: 274,
        imageId: 57,
        content: 'This reminds me of the word vestigial.'
      },
      {
        userId: 161,
        imageId: 35,
        content: 'This reminds me of the word wherewithal.'
      },
      {
        userId: 91,
        imageId: 142,
        content: 'This reminds me of the word affection.'
      },
      {
        userId: 41,
        imageId: 30,
        content: 'This reminds me of the word charm.'
      },
      {
        userId: 367,
        imageId: 49,
        content: 'This reminds me of the word comfort.'
      },
      {
        userId: 206,
        imageId: 23,
        content: 'This reminds me of the word compassion.'
      },
      {
        userId: 72,
        imageId: 150,
        content: 'This reminds me of the word elegance.'
      },
      {
        userId: 176,
        imageId: 71,
        content: 'This reminds me of the word equanimity.'
      },
      {
        userId: 88,
        imageId: 111,
        content: 'This reminds me of the word eudaimonia.'
      },
      {
        userId: 341,
        imageId: 13,
        content: 'This reminds me of the word euphoria.'
      },
      {
        userId: 339,
        imageId: 139,
        content: 'This reminds me of the word flourish.'
      },
      {
        userId: 191,
        imageId: 160,
        content: 'This reminds me of the word glamour.'
      },
      {
        userId: 367,
        imageId: 16,
        content: 'This reminds me of the word gorgeous.'
      },
      {
        userId: 297,
        imageId: 10,
        content: 'This reminds me of the word happiness.'
      },
      {
        userId: 372,
        imageId: 25,
        content: 'This reminds me of the word idyllic.'
      },
      {
        userId: 123,
        imageId: 200,
        content: 'This reminds me of the word love.'
      },
      {
        userId: 62,
        imageId: 96,
        content: 'This reminds me of the word peace.'
      },
      {
        userId: 304,
        imageId: 102,
        content: 'This reminds me of the word pristine.'
      },
      {
        userId: 40,
        imageId: 154,
        content: 'This reminds me of the word quintessential.'
      },
      {
        userId: 174,
        imageId: 143,
        content: 'This reminds me of the word sumptuous.'
      },
      {
        userId: 334,
        imageId: 133,
        content: 'This reminds me of the word tranquility.'
      },
      {
        userId: 317,
        imageId: 49,
        content: 'This reminds me of the word glory.'
      },
      {
        userId: 277,
        imageId: 56,
        content: 'I think this is breathtaking! I would love to see more pictures where you focus on Angst.'
      },
      {
        userId: 97,
        imageId: 96,
        content: 'I think this is amazing! I would love to see more pictures where you focus on aurora.'
      },
      {
        userId: 99,
        imageId: 64,
        content: 'I think this is stunning! I would love to see more pictures where you focus on axiom.'
      },
      {
        userId: 34,
        imageId: 14,
        content: 'I think this is astounding! I would love to see more pictures where you focus on becoming.'
      },
      {
        userId: 339,
        imageId: 189,
        content: 'I think this is astonishing! I would love to see more pictures where you focus on blossom.'
      },
      {
        userId: 360,
        imageId: 131,
        content: 'I think this is awe-inspiring! I would love to see more pictures where you focus on brood.'
      },
      {
        userId: 184,
        imageId: 19,
        content: 'I think this is stupendous! I would love to see more pictures where you focus on cherish.'
      },
      {
        userId: 248,
        imageId: 69,
        content: 'I think this is staggering! I would love to see more pictures where you focus on delicacy.'
      },
      {
        userId: 57,
        imageId: 21,
        content: 'I think this is extraordinary! I would love to see more pictures where you focus on elixir.'
      },
      {
        userId: 48,
        imageId: 140,
        content: 'I think this is incredible! I would love to see more pictures where you focus on galactic.'
      },
      {
        userId: 318,
        imageId: 139,
        content: 'I think this is unbelievable! I would love to see more pictures where you focus on hope.'
      },
      {
        userId: 239,
        imageId: 181,
        content: 'I think this is magnificent! I would love to see more pictures where you focus on labyrinth.'
      },
      {
        userId: 326,
        imageId: 100,
        content: 'I think this is wonderful! I would love to see more pictures where you focus on murder.'
      },
      {
        userId: 324,
        imageId: 151,
        content: 'I think this is spectacular! I would love to see more pictures where you focus on nemesis.'
      },
      {
        userId: 125,
        imageId: 159,
        content: 'I think this is remarkable! I would love to see more pictures where you focus on oblivion.'
      },
      {
        userId: 224,
        imageId: 169,
        content: 'I think this is phenomenal! I would love to see more pictures where you focus on paradox.'
      },
      {
        userId: 234,
        imageId: 193,
        content: 'I think this is prodigious! I would love to see more pictures where you focus on philosophy.'
      },
      {
        userId: 209,
        imageId: 164,
        content: 'I think this is miraculous! I would love to see more pictures where you focus on solitude.'
      },
      {
        userId: 198,
        imageId: 85,
        content: 'I think this is sublime! I would love to see more pictures where you focus on tryst.'
      },
      {
        userId: 159,
        imageId: 34,
        content: 'I think this is formidable! I would love to see more pictures where you focus on woebegone.'
      },
      {
        userId: 93,
        imageId: 37,
        content: 'I think this is imposing! I would love to see more pictures where you focus on bungalow.'
      },
      {
        userId: 298,
        imageId: 140,
        content: 'I think this is impressive! I would love to see more pictures where you focus on conflate.'
      },
      {
        userId: 181,
        imageId: 171,
        content: 'I think this is mind-boggling! I would love to see more pictures where you focus on demure.'
      },
      {
        userId: 239,
        imageId: 142,
        content: 'I think this is mind-blowing! I would love to see more pictures where you focus on effervescence.'
      },
      {
        userId: 204,
        imageId: 46,
        content: 'I think this is out of this world! I would love to see more pictures where you focus on eloquence.'
      },
      {
        userId: 46,
        imageId: 34,
        content: 'I think this is amazeballs! I would love to see more pictures where you focus on epiphany.'
      },
      {
        userId: 100,
        imageId: 88,
        content: 'I think this is badass! I would love to see more pictures where you focus on ephemeral.'
      },
      {
        userId: 43,
        imageId: 74,
        content: 'I think this is wondrous! I would love to see more pictures where you focus on esoteric.'
      },
      {
        userId: 25,
        imageId: 93,
        content: 'I think this is attractive! I would love to see more pictures where you focus on ethereal.'
      },
      {
        userId: 36,
        imageId: 41,
        content: 'I think this is pretty! I would love to see more pictures where you focus on evocative.'
      },
      {
        userId: 361,
        imageId: 52,
        content: 'I think this is handsome! I would love to see more pictures where you focus on imbue.'
      },
      {
        userId: 228,
        imageId: 157,
        content: 'I think this is good-looking! I would love to see more pictures where you focus on incendiary.'
      },
      {
        userId: 136,
        imageId: 126,
        content: 'I think this is nice-looking! I would love to see more pictures where you focus on leisure.'
      },
      {
        userId: 22,
        imageId: 110,
        content: 'I think this is pleasing! I would love to see more pictures where you focus on luminescence.'
      },
      {
        userId: 199,
        imageId: 116,
        content: 'I think this is alluring! I would love to see more pictures where you focus on pinnacle.'
      },
      {
        userId: 37,
        imageId: 18,
        content: 'I think this is prepossessing! I would love to see more pictures where you focus on plethora.'
      },
      {
        userId: 90,
        imageId: 69,
        content: 'I think this is as pretty as a picture! I would love to see more pictures where you focus on ripple.'
      },
      {
        userId: 198,
        imageId: 144,
        content: 'I think this is lovely! I would love to see more pictures where you focus on serendipity.'
      },
      {
        userId: 355,
        imageId: 47,
        content: 'I think this is charming! I would love to see more pictures where you focus on silhouette.'
      },
      {
        userId: 127,
        imageId: 17,
        content: 'I think this is delightful! I would love to see more pictures where you focus on vestigial.'
      },
      {
        userId: 139,
        imageId: 58,
        content: 'I think this is appealing! I would love to see more pictures where you focus on wherewithal.'
      },
      {
        userId: 290,
        imageId: 59,
        content: 'I think this is engaging! I would love to see more pictures where you focus on affection.'
      },
      {
        userId: 386,
        imageId: 42,
        content: 'I think this is winsome! I would love to see more pictures where you focus on charm.'
      },
      {
        userId: 146,
        imageId: 189,
        content: 'I think this is ravishing! I would love to see more pictures where you focus on comfort.'
      },
      {
        userId: 223,
        imageId: 127,
        content: 'I think this is gorgeous! I would love to see more pictures where you focus on compassion.'
      },
      {
        userId: 216,
        imageId: 67,
        content: 'I think this is heavenly! I would love to see more pictures where you focus on elegance.'
      },
      {
        userId: 150,
        imageId: 88,
        content: 'I think this is arresting! I would love to see more pictures where you focus on equanimity.'
      },
      {
        userId: 28,
        imageId: 78,
        content: 'I think this is glamorous! I would love to see more pictures where you focus on eudaimonia.'
      },
      {
        userId: 41,
        imageId: 33,
        content: 'I think this is irresistible! I would love to see more pictures where you focus on euphoria.'
      },
      {
        userId: 160,
        imageId: 191,
        content: 'I think this is bewitching! I would love to see more pictures where you focus on flourish.'
      },
      {
        userId: 381,
        imageId: 184,
        content: 'I think this is beguiling! I would love to see more pictures where you focus on glamour.'
      },
      {
        userId: 33,
        imageId: 142,
        content: 'I think this is graceful! I would love to see more pictures where you focus on gorgeous.'
      },
      {
        userId: 152,
        imageId: 126,
        content: 'I think this is elegant! I would love to see more pictures where you focus on happiness.'
      },
      {
        userId: 349,
        imageId: 75,
        content: 'I think this is exquisite! I would love to see more pictures where you focus on idyllic.'
      },
      {
        userId: 279,
        imageId: 155,
        content: 'I think this is aesthetic! I would love to see more pictures where you focus on love.'
      },
      {
        userId: 234,
        imageId: 149,
        content: 'I think this is artistic! I would love to see more pictures where you focus on peace.'
      },
      {
        userId: 387,
        imageId: 76,
        content: 'I think this is decorative! I would love to see more pictures where you focus on pristine.'
      },
      {
        userId: 278,
        imageId: 67,
        content: 'I think this is bonny! I would love to see more pictures where you focus on quintessential.'
      },
      {
        userId: 206,
        imageId: 151,
        content: 'I think this is hot! I would love to see more pictures where you focus on sumptuous.'
      },
      {
        userId: 307,
        imageId: 194,
        content: 'I think this is tasty! I would love to see more pictures where you focus on tranquility.'
      },
      {
        userId: 346,
        imageId: 118,
        content: 'I think this is divine! I would love to see more pictures where you focus on glory.'
      },
      { userId: 82, imageId: 17, content: 'Amazing!!!' },
      { userId: 68, imageId: 5, content: 'Amazing!!!' },
      { userId: 319, imageId: 167, content: 'Amazing!!!' },
      { userId: 177, imageId: 83, content: 'Amazing!!!' },
      { userId: 329, imageId: 74, content: 'Amazing!!!' },
      { userId: 51, imageId: 165, content: 'Amazing!!!' },
      { userId: 256, imageId: 144, content: 'Amazing!!!' },
      { userId: 258, imageId: 101, content: 'Amazing!!!' },
      { userId: 381, imageId: 75, content: 'Amazing!!!' },
      { userId: 18, imageId: 124, content: 'Amazing!!!' },
      { userId: 3, imageId: 63, content: 'Amazing!!!' },
      { userId: 176, imageId: 81, content: 'Amazing!!!' },
      { userId: 17, imageId: 197, content: 'Amazing!!!' },
      { userId: 292, imageId: 21, content: 'Amazing!!!' },
      { userId: 290, imageId: 152, content: 'Amazing!!!' },
      { userId: 120, imageId: 190, content: 'Amazing!!!' },
      { userId: 151, imageId: 130, content: 'Amazing!!!' },
      { userId: 70, imageId: 19, content: 'Amazing!!!' },
      { userId: 353, imageId: 102, content: 'Amazing!!!' },
      { userId: 301, imageId: 172, content: 'Amazing!!!' },
      { userId: 356, imageId: 188, content: 'Amazing!!!' },
      { userId: 100, imageId: 173, content: 'Amazing!!!' },
      { userId: 249, imageId: 177, content: 'Amazing!!!' },
      { userId: 281, imageId: 25, content: 'Amazing!!!' },
      { userId: 229, imageId: 7, content: 'Amazing!!!' },
      { userId: 88, imageId: 55, content: 'Amazing!!!' },
      { userId: 303, imageId: 25, content: 'Amazing!!!' },
      { userId: 109, imageId: 115, content: 'Amazing!!!' },
      { userId: 374, imageId: 84, content: 'Amazing!!!' },
      { userId: 389, imageId: 3, content: 'Amazing!!!' },
      { userId: 29, imageId: 18, content: 'Amazing!!!' },
      { userId: 134, imageId: 71, content: 'Amazing!!!' },
      { userId: 236, imageId: 136, content: 'Amazing!!!' },
      { userId: 134, imageId: 16, content: 'Love it!!!' },
      { userId: 30, imageId: 178, content: 'Love it!!!' },
      { userId: 322, imageId: 118, content: 'Love it!!!' },
      { userId: 109, imageId: 128, content: 'Love it!!!' },
      { userId: 137, imageId: 61, content: 'Love it!!!' },
      { userId: 290, imageId: 83, content: 'Love it!!!' },
      { userId: 25, imageId: 117, content: 'Love it!!!' },
      { userId: 224, imageId: 160, content: 'Love it!!!' },
      { userId: 235, imageId: 102, content: 'Love it!!!' },
      { userId: 366, imageId: 45, content: 'Love it!!!' },
      { userId: 181, imageId: 86, content: 'Love it!!!' },
      { userId: 395, imageId: 190, content: 'Love it!!!' },
      { userId: 54, imageId: 37, content: 'Love it!!!' },
      { userId: 297, imageId: 15, content: 'Love it!!!' },
      { userId: 1, imageId: 136, content: 'Love it!!!' },
      { userId: 267, imageId: 146, content: 'Love it!!!' },
      { userId: 239, imageId: 53, content: 'Love it!!!' },
      { userId: 355, imageId: 78, content: 'Love it!!!' },
      { userId: 376, imageId: 2, content: 'Love it!!!' },
      { userId: 75, imageId: 21, content: 'Love it!!!' },
      { userId: 1, imageId: 141, content: 'Love it!!!' },
      { userId: 67, imageId: 197, content: 'Love it!!!' },
      { userId: 171, imageId: 123, content: 'Love it!!!' },
      { userId: 93, imageId: 32, content: 'Love it!!!' },
      { userId: 56, imageId: 199, content: 'Love it!!!' },
      { userId: 391, imageId: 139, content: 'Love it!!!' },
      { userId: 159, imageId: 180, content: 'Love it!!!' },
      { userId: 201, imageId: 137, content: 'Love it!!!' },
      { userId: 346, imageId: 167, content: 'Love it!!!' },
      { userId: 59, imageId: 183, content: 'Love it!!!' },
      { userId: 346, imageId: 163, content: 'Love it!!!' },
      { userId: 137, imageId: 56, content: 'Love it!!!' },
      { userId: 275, imageId: 36, content: 'Love it!!!' },
      { userId: 9, imageId: 142, content: 'Love it!!!' },
      { userId: 159, imageId: 172, content: 'Love it!!!' },
      { userId: 10, imageId: 164, content: 'Love it!!!' },
      { userId: 267, imageId: 10, content: 'Love it!!!' },
      { userId: 174, imageId: 159, content: 'Love it!!!' },
      { userId: 337, imageId: 35, content: 'Wow. Love it!' },
      { userId: 293, imageId: 104, content: 'Wow. Love it!' },
      { userId: 55, imageId: 22, content: 'Wow. Love it!' },
      { userId: 369, imageId: 126, content: 'Wow. Love it!' },
      { userId: 127, imageId: 171, content: 'Wow. Love it!' },
      { userId: 52, imageId: 153, content: 'Wow. Love it!' },
      { userId: 183, imageId: 15, content: 'Wow. Love it!' },
      { userId: 333, imageId: 192, content: 'Wow. Love it!' },
      { userId: 377, imageId: 132, content: 'Wow. Love it!' },
      { userId: 360, imageId: 13, content: 'Wow. Love it!' },
      { userId: 88, imageId: 96, content: 'Wow. Love it!' },
      { userId: 302, imageId: 28, content: 'Wow. Love it!' }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Comments', {
      content: { [Op.in]: [
        "breathtaking!",
        "amazing!",
        "stunning!",
        "astounding!",
        "astonishing!",
        "awe-inspiring!",
        "stupendous!",
        "staggering!",
        "extraordinary!",
        "incredible!",
        "unbelievable!",
        "magnificent!",
        "wonderful!",
        "spectacular!",
        "remarkable!",
        "phenomenal!",
        "prodigious!",
        "miraculous!",
        "sublime!",
        "formidable!",
        "imposing!",
        "impressive!",
        "mind-boggling!",
        "mind-blowing!",
        "out of this world!",
        "amazeballs!",
        "badass!",
        "wondrous!",
        "attractive!",
        "pretty!",
        "handsome!",
        "good-looking!",
        "nice-looking!",
        "pleasing!",
        "alluring!",
        "prepossessing!",
        "as pretty as a picture!",
        "lovely!",
        "charming!",
        "delightful!",
        "appealing!",
        "engaging!",
        "winsome!",
        "ravishing!",
        "gorgeous!",
        "heavenly!",
        "arresting!",
        "glamorous!",
        "irresistible!",
        "bewitching!",
        "beguiling!",
        "graceful!",
        "elegant!",
        "exquisite!",
        "aesthetic!",
        "artistic!",
        "decorative!",
        "bonny!",
        "hot!",
        "tasty!",
        "divine!",
        "knockout!",
        "drop-dead gorgeous!",
        "fanciable!",
        "beddable!",
        "easy on the eye!",
        "fit!",
        "smashing!",
        "cute!",
        "foxy!",
        "beaut!",
        "spunky!",
        "beauteous!",
        "comely!",
        "aesthetic !",
        "exhilaration!",
        "felicity!",
        "gossamer!",
        "halcyon!",
        "jubilation!",
        "languor!",
        "lassitude!",
        "love!",
        "lyrical!",
        "photogenic!",
        "rejuvenated!",
        "scenic!",
        "sprightly!",
        "vigorous!",
        "balletic!",
        "crescendo!",
        "deft!",
        "dulcet!",
        "euphonious!",
        "fugacious!",
        "gesticulate!",
        "hullabaloo!",
        "lamprophony!",
        "lilt!",
        "lissome!",
        "lithe!",
        "mellifluous!",
        "mondegreen!",
        "murmurous!",
        "nimble!",
        "onomatopoeia!",
        "percussive!",
        "resounding!",
        "ripple!",
        "saunter!",
        "susurrous!",
        "thunderous!",
        "tintinnabulation!",
        "wafture!",
        "abomination!",
        "beleaguer!",
        "brood!",
        "desuetude!",
        "desultory!",
        "elision!",
        "furtive!",
        "fuscous -!",
        "gambol!",
        "imbroglio!",
        "indoctrinate!",
        "insinuate!",
        "insouciance!",
        "inured!",
        "labyrinthine!",
        "malefactor!",
        "nemesis!",
        "pugnacious!",
        "pyrrhic!",
        "sorcery!",
        "subterfuge!",
        "surreptitious!",
        "trickery!",
        "untoward!",
        "woebegone!",
        "ailurophile!",
        "chatoyant!",
        "cynosure!",
        "so sick~~~",
        "Wow!",
        "This is so good!",
        "effervescent !",
        "ethereal !",
        "evanescent !",
        "evocative!",
        "I get a sense of angst.",
        "I get a sense of aurora.",
        "I get a sense of axiom.",
        "I get a sense of becoming.",
        "I get a sense of blossom.",
        "I get a sense of brood.",
        "I get a sense of cherish.",
        "I get a sense of delicacy.",
        "I get a sense of elixir.",
        "I get a sense of galactic.",
        "I get a sense of hope.",
        "I get a sense of labyrinth.",
        "I get a sense of murder.",
        "I get a sense of nemesis.",
        "I get a sense of oblivion.",
        "I get a sense of paradox.",
        "I get a sense of philosophy.",
        "I get a sense of solitude.",
        "I get a sense of tryst.",
        "I get a sense of woebegone.",
        "I get a sense of bungalow.",
        "I get a sense of conflate.",
        "I get a sense of demure.",
        "I get a sense of effervescence.",
        "I get a sense of eloquence.",
        "I get a sense of epiphany.",
        "I get a sense of ephemeral.",
        "I get a sense of esoteric.",
        "I get a sense of ethereal.",
        "I get a sense of evocative.",
        "I get a sense of imbue.",
        "I get a sense of incendiary.",
        "I get a sense of leisure.",
        "I get a sense of luminescence.",
        "I get a sense of pinnacle.",
        "I get a sense of plethora.",
        "I get a sense of ripple.",
        "I get a sense of serendipity.",
        "I get a sense of silhouette.",
        "I get a sense of vestigial.",
        "I get a sense of wherewithal.",
        "I get a sense of affection.",
        "I get a sense of charm.",
        "I get a sense of comfort.",
        "I get a sense of compassion.",
        "I get a sense of elegance.",
        "I get a sense of equanimity.",
        "I get a sense of eudaimonia.",
        "I get a sense of euphoria.",
        "I get a sense of flourish.",
        "I get a sense of glamour.",
        "I get a sense of gorgeous.",
        "I get a sense of happiness.",
        "I get a sense of idyllic.",
        "I get a sense of love.",
        "I get a sense of peace.",
        "I get a sense of pristine.",
        "I get a sense of quintessential.",
        "I get a sense of sumptuous.",
        "I get a sense of tranquility.",
        "I get a sense of glory.",
        "This made me think of angst.",
        "This made me think of aurora.",
        "This made me think of axiom.",
        "This made me think of becoming.",
        "This made me think of blossom.",
        "This made me think of brood.",
        "This made me think of cherish.",
        "This made me think of delicacy.",
        "This made me think of elixir.",
        "This made me think of galactic.",
        "This made me think of hope.",
        "This made me think of labyrinth.",
        "This made me think of murder.",
        "This made me think of nemesis.",
        "This made me think of oblivion.",
        "This made me think of paradox.",
        "This made me think of philosophy.",
        "This made me think of solitude.",
        "This made me think of tryst.",
        "This made me think of woebegone.",
        "This made me think of bungalow.",
        "This made me think of conflate.",
        "This made me think of demure.",
        "This made me think of effervescence.",
        "This made me think of eloquence.",
        "This made me think of epiphany.",
        "This made me think of ephemeral.",
        "This made me think of esoteric.",
        "This made me think of ethereal.",
        "This made me think of evocative.",
        "This made me think of imbue.",
        "This made me think of incendiary.",
        "This made me think of leisure.",
        "This made me think of luminescence.",
        "This made me think of pinnacle.",
        "This made me think of plethora.",
        "This made me think of ripple.",
        "This made me think of serendipity.",
        "This made me think of silhouette.",
        "This made me think of vestigial.",
        "This made me think of wherewithal.",
        "This made me think of affection.",
        "This made me think of charm.",
        "This made me think of comfort.",
        "This made me think of compassion.",
        "This made me think of elegance.",
        "This made me think of equanimity.",
        "This made me think of eudaimonia.",
        "This made me think of euphoria.",
        "This made me think of flourish.",
        "This made me think of glamour.",
        "This made me think of gorgeous.",
        "This made me think of happiness.",
        "This made me think of idyllic.",
        "This made me think of love.",
        "This made me think of peace.",
        "This made me think of pristine.",
        "This made me think of quintessential.",
        "This made me think of sumptuous.",
        "This made me think of tranquility.",
        "This made me think of glory.",
        "This reminds me of the word angst.",
        "This reminds me of the word aurora.",
        "This reminds me of the word axiom.",
        "This reminds me of the word becoming.",
        "This reminds me of the word blossom.",
        "This reminds me of the word brood.",
        "This reminds me of the word cherish.",
        "This reminds me of the word delicacy.",
        "This reminds me of the word elixir.",
        "This reminds me of the word galactic.",
        "This reminds me of the word hope.",
        "This reminds me of the word labyrinth.",
        "This reminds me of the word murder.",
        "This reminds me of the word nemesis.",
        "This reminds me of the word oblivion.",
        "This reminds me of the word paradox.",
        "This reminds me of the word philosophy.",
        "This reminds me of the word solitude.",
        "This reminds me of the word tryst.",
        "This reminds me of the word woebegone.",
        "This reminds me of the word bungalow.",
        "This reminds me of the word conflate.",
        "This reminds me of the word demure.",
        "This reminds me of the word effervescence.",
        "This reminds me of the word eloquence.",
        "This reminds me of the word epiphany.",
        "This reminds me of the word ephemeral.",
        "This reminds me of the word esoteric.",
        "This reminds me of the word ethereal.",
        "This reminds me of the word evocative.",
        "This reminds me of the word imbue.",
        "This reminds me of the word incendiary.",
        "This reminds me of the word leisure.",
        "This reminds me of the word luminescence.",
        "This reminds me of the word pinnacle.",
        "This reminds me of the word plethora.",
        "This reminds me of the word ripple.",
        "This reminds me of the word serendipity.",
        "This reminds me of the word silhouette.",
        "This reminds me of the word vestigial.",
        "This reminds me of the word wherewithal.",
        "This reminds me of the word affection.",
        "This reminds me of the word charm.",
        "This reminds me of the word comfort.",
        "This reminds me of the word compassion.",
        "This reminds me of the word elegance.",
        "This reminds me of the word equanimity.",
        "This reminds me of the word eudaimonia.",
        "This reminds me of the word euphoria.",
        "This reminds me of the word flourish.",
        "This reminds me of the word glamour.",
        "This reminds me of the word gorgeous.",
        "This reminds me of the word happiness.",
        "This reminds me of the word idyllic.",
        "This reminds me of the word love.",
        "This reminds me of the word peace.",
        "This reminds me of the word pristine.",
        "This reminds me of the word quintessential.",
        "This reminds me of the word sumptuous.",
        "This reminds me of the word tranquility.",
        "This reminds me of the word glory.",
        "I think this is breathtaking! I would love to see more pictures where you focus on Angst.",
        "I think this is amazing! I would love to see more pictures where you focus on aurora.",
        "I think this is stunning! I would love to see more pictures where you focus on axiom.",
        "I think this is astounding! I would love to see more pictures where you focus on becoming.",
        "I think this is astonishing! I would love to see more pictures where you focus on blossom.",
        "I think this is awe-inspiring! I would love to see more pictures where you focus on brood.",
        "I think this is stupendous! I would love to see more pictures where you focus on cherish.",
        "I think this is staggering! I would love to see more pictures where you focus on delicacy.",
        "I think this is extraordinary! I would love to see more pictures where you focus on elixir.",
        "I think this is incredible! I would love to see more pictures where you focus on galactic.",
        "I think this is unbelievable! I would love to see more pictures where you focus on hope.",
        "I think this is magnificent! I would love to see more pictures where you focus on labyrinth.",
        "I think this is wonderful! I would love to see more pictures where you focus on murder.",
        "I think this is spectacular! I would love to see more pictures where you focus on nemesis.",
        "I think this is remarkable! I would love to see more pictures where you focus on oblivion.",
        "I think this is phenomenal! I would love to see more pictures where you focus on paradox.",
        "I think this is prodigious! I would love to see more pictures where you focus on philosophy.",
        "I think this is miraculous! I would love to see more pictures where you focus on solitude.",
        "I think this is sublime! I would love to see more pictures where you focus on tryst.",
        "I think this is formidable! I would love to see more pictures where you focus on woebegone.",
        "I think this is imposing! I would love to see more pictures where you focus on bungalow.",
        "I think this is impressive! I would love to see more pictures where you focus on conflate.",
        "I think this is mind-boggling! I would love to see more pictures where you focus on demure.",
        "I think this is mind-blowing! I would love to see more pictures where you focus on effervescence.",
        "I think this is out of this world! I would love to see more pictures where you focus on eloquence.",
        "I think this is amazeballs! I would love to see more pictures where you focus on epiphany.",
        "I think this is badass! I would love to see more pictures where you focus on ephemeral.",
        "I think this is wondrous! I would love to see more pictures where you focus on esoteric.",
        "I think this is attractive! I would love to see more pictures where you focus on ethereal.",
        "I think this is pretty! I would love to see more pictures where you focus on evocative.",
        "I think this is handsome! I would love to see more pictures where you focus on imbue.",
        "I think this is good-looking! I would love to see more pictures where you focus on incendiary.",
        "I think this is nice-looking! I would love to see more pictures where you focus on leisure.",
        "I think this is pleasing! I would love to see more pictures where you focus on luminescence.",
        "I think this is alluring! I would love to see more pictures where you focus on pinnacle.",
        "I think this is prepossessing! I would love to see more pictures where you focus on plethora.",
        "I think this is as pretty as a picture! I would love to see more pictures where you focus on ripple.",
        "I think this is lovely! I would love to see more pictures where you focus on serendipity.",
        "I think this is charming! I would love to see more pictures where you focus on silhouette.",
        "I think this is delightful! I would love to see more pictures where you focus on vestigial.",
        "I think this is appealing! I would love to see more pictures where you focus on wherewithal.",
        "I think this is engaging! I would love to see more pictures where you focus on affection.",
        "I think this is winsome! I would love to see more pictures where you focus on charm.",
        "I think this is ravishing! I would love to see more pictures where you focus on comfort.",
        "I think this is gorgeous! I would love to see more pictures where you focus on compassion.",
        "I think this is heavenly! I would love to see more pictures where you focus on elegance.",
        "I think this is arresting! I would love to see more pictures where you focus on equanimity.",
        "I think this is glamorous! I would love to see more pictures where you focus on eudaimonia.",
        "I think this is irresistible! I would love to see more pictures where you focus on euphoria.",
        "I think this is bewitching! I would love to see more pictures where you focus on flourish.",
        "I think this is beguiling! I would love to see more pictures where you focus on glamour.",
        "I think this is graceful! I would love to see more pictures where you focus on gorgeous.",
        "I think this is elegant! I would love to see more pictures where you focus on happiness.",
        "I think this is exquisite! I would love to see more pictures where you focus on idyllic.",
        "I think this is aesthetic! I would love to see more pictures where you focus on love.",
        "I think this is artistic! I would love to see more pictures where you focus on peace.",
        "I think this is decorative! I would love to see more pictures where you focus on pristine.",
        "I think this is bonny! I would love to see more pictures where you focus on quintessential.",
        "I think this is hot! I would love to see more pictures where you focus on sumptuous.",
        "I think this is tasty! I would love to see more pictures where you focus on tranquility.",
        "I think this is divine! I would love to see more pictures where you focus on glory.",
        "Amazing!!!",
        "Love it!!!",
        "Wow. Love it!"
      ]}
    },{})
  }
};
