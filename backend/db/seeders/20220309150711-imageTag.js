'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ImageTags', [
      { imageId: 1, tagId: 123 },
      { imageId: 1, tagId: 36 },
      { imageId: 1, tagId: 235 },
      { imageId: 1, tagId: 207 },
      { imageId: 1, tagId: 124 },
      { imageId: 2, tagId: 282 },
      { imageId: 2, tagId: 119 },
      { imageId: 2, tagId: 167 },
      { imageId: 2, tagId: 185 },
      { imageId: 2, tagId: 74 },
      { imageId: 3, tagId: 113 },
      { imageId: 3, tagId: 156 },
      { imageId: 3, tagId: 124 },
      { imageId: 3, tagId: 184 },
      { imageId: 3, tagId: 88 },
      { imageId: 4, tagId: 32 },
      { imageId: 4, tagId: 217 },
      { imageId: 4, tagId: 178 },
      { imageId: 4, tagId: 251 },
      { imageId: 4, tagId: 188 },
      { imageId: 5, tagId: 141 },
      { imageId: 5, tagId: 123 },
      { imageId: 5, tagId: 210 },
      { imageId: 5, tagId: 201 },
      { imageId: 5, tagId: 1 },
      { imageId: 6, tagId: 252 },
      { imageId: 6, tagId: 262 },
      { imageId: 6, tagId: 64 },
      { imageId: 6, tagId: 174 },
      { imageId: 6, tagId: 221 },
      { imageId: 7, tagId: 45 },
      { imageId: 7, tagId: 13 },
      { imageId: 7, tagId: 296 },
      { imageId: 7, tagId: 224 },
      { imageId: 7, tagId: 214 },
      { imageId: 8, tagId: 252 },
      { imageId: 8, tagId: 163 },
      { imageId: 8, tagId: 157 },
      { imageId: 8, tagId: 79 },
      { imageId: 8, tagId: 43 },
      { imageId: 9, tagId: 47 },
      { imageId: 9, tagId: 235 },
      { imageId: 9, tagId: 182 },
      { imageId: 9, tagId: 64 },
      { imageId: 9, tagId: 259 },
      { imageId: 10, tagId: 107 },
      { imageId: 10, tagId: 295 },
      { imageId: 10, tagId: 202 },
      { imageId: 10, tagId: 77 },
      { imageId: 10, tagId: 183 },
      { imageId: 11, tagId: 93 },
      { imageId: 11, tagId: 191 },
      { imageId: 11, tagId: 179 },
      { imageId: 11, tagId: 110 },
      { imageId: 12, tagId: 124 },
      { imageId: 12, tagId: 11 },
      { imageId: 12, tagId: 262 },
      { imageId: 12, tagId: 233 },
      { imageId: 13, tagId: 275 },
      { imageId: 13, tagId: 220 },
      { imageId: 13, tagId: 299 },
      { imageId: 13, tagId: 132 },
      { imageId: 14, tagId: 227 },
      { imageId: 14, tagId: 5 },
      { imageId: 14, tagId: 138 },
      { imageId: 14, tagId: 117 },
      { imageId: 15, tagId: 175 },
      { imageId: 15, tagId: 28 },
      { imageId: 15, tagId: 55 },
      { imageId: 15, tagId: 169 },
      { imageId: 16, tagId: 22 },
      { imageId: 16, tagId: 53 },
      { imageId: 16, tagId: 297 },
      { imageId: 16, tagId: 199 },
      { imageId: 17, tagId: 21 },
      { imageId: 17, tagId: 282 },
      { imageId: 17, tagId: 54 },
      { imageId: 17, tagId: 118 },
      { imageId: 18, tagId: 252 },
      { imageId: 18, tagId: 23 },
      { imageId: 18, tagId: 244 },
      { imageId: 18, tagId: 164 },
      { imageId: 19, tagId: 32 },
      { imageId: 19, tagId: 297 },
      { imageId: 19, tagId: 13 },
      { imageId: 19, tagId: 93 },
      { imageId: 20, tagId: 151 },
      { imageId: 20, tagId: 201 },
      { imageId: 20, tagId: 150 },
      { imageId: 21, tagId: 270 },
      { imageId: 21, tagId: 6 },
      { imageId: 21, tagId: 22 },
      { imageId: 22, tagId: 282 },
      { imageId: 22, tagId: 175 },
      { imageId: 22, tagId: 166 },
      { imageId: 23, tagId: 171 },
      { imageId: 23, tagId: 215 },
      { imageId: 23, tagId: 248 },
      { imageId: 24, tagId: 48 },
      { imageId: 24, tagId: 67 },
      { imageId: 24, tagId: 108 },
      { imageId: 25, tagId: 130 },
      { imageId: 25, tagId: 229 },
      { imageId: 25, tagId: 298 },
      { imageId: 26, tagId: 116 },
      { imageId: 26, tagId: 69 },
      { imageId: 26, tagId: 296 },
      { imageId: 27, tagId: 82 },
      { imageId: 27, tagId: 264 },
      { imageId: 27, tagId: 21 },
      { imageId: 28, tagId: 197 },
      { imageId: 28, tagId: 161 },
      { imageId: 28, tagId: 209 },
      { imageId: 29, tagId: 199 },
      { imageId: 29, tagId: 278 },
      { imageId: 29, tagId: 56 },
      { imageId: 30, tagId: 36 },
      { imageId: 30, tagId: 300 },
      { imageId: 31, tagId: 105 },
      { imageId: 31, tagId: 63 },
      { imageId: 32, tagId: 222 },
      { imageId: 32, tagId: 297 },
      { imageId: 33, tagId: 102 },
      { imageId: 33, tagId: 191 },
      { imageId: 34, tagId: 242 },
      { imageId: 34, tagId: 59 },
      { imageId: 35, tagId: 84 },
      { imageId: 35, tagId: 78 },
      { imageId: 36, tagId: 243 },
      { imageId: 36, tagId: 156 },
      { imageId: 37, tagId: 62 },
      { imageId: 37, tagId: 184 },
      { imageId: 38, tagId: 37 },
      { imageId: 38, tagId: 284 },
      { imageId: 39, tagId: 161 },
      { imageId: 39, tagId: 230 },
      { imageId: 40, tagId: 188 },
      { imageId: 41, tagId: 171 },
      { imageId: 42, tagId: 99 },
      { imageId: 43, tagId: 299 },
      { imageId: 44, tagId: 219 },
      { imageId: 45, tagId: 122 },
      { imageId: 46, tagId: 232 },
      { imageId: 47, tagId: 19 },
      { imageId: 48, tagId: 23 },
      { imageId: 49, tagId: 187 },
      { imageId: 50, tagId: 73 },
      { imageId: 51, tagId: 127 },
      { imageId: 52, tagId: 35 },
      { imageId: 53, tagId: 74 },
      { imageId: 54, tagId: 269 },
      { imageId: 55, tagId: 118 },
      { imageId: 56, tagId: 56 },
      { imageId: 57, tagId: 168 },
      { imageId: 58, tagId: 26 },
      { imageId: 59, tagId: 275 },
      { imageId: 60, tagId: 74 },
      { imageId: 61, tagId: 264 },
      { imageId: 62, tagId: 11 },
      { imageId: 63, tagId: 132 },
      { imageId: 64, tagId: 125 },
      { imageId: 65, tagId: 186 },
      { imageId: 66, tagId: 25 },
      { imageId: 67, tagId: 2 },
      { imageId: 68, tagId: 164 },
      { imageId: 69, tagId: 40 },
      { imageId: 70, tagId: 154 },
      { imageId: 71, tagId: 176 },
      { imageId: 72, tagId: 158 },
      { imageId: 73, tagId: 14 },
      { imageId: 74, tagId: 145 },
      { imageId: 75, tagId: 126 },
      { imageId: 76, tagId: 240 },
      { imageId: 77, tagId: 133 },
      { imageId: 78, tagId: 227 },
      { imageId: 79, tagId: 13 },
      { imageId: 80, tagId: 173 },
      { imageId: 81, tagId: 189 },
      { imageId: 82, tagId: 7 },
      { imageId: 83, tagId: 150 },
      { imageId: 84, tagId: 135 },
      { imageId: 85, tagId: 247 },
      { imageId: 86, tagId: 122 },
      { imageId: 87, tagId: 67 },
      { imageId: 88, tagId: 247 },
      { imageId: 89, tagId: 164 },
      { imageId: 90, tagId: 88 },
      { imageId: 91, tagId: 282 },
      { imageId: 92, tagId: 100 },
      { imageId: 93, tagId: 79 },
      { imageId: 94, tagId: 30 },
      { imageId: 95, tagId: 2 },
      { imageId: 96, tagId: 171 },
      { imageId: 97, tagId: 66 },
      { imageId: 98, tagId: 182 },
      { imageId: 99, tagId: 160 },
      { imageId: 100, tagId: 290 },
      { imageId: 101, tagId: 88 },
      { imageId: 102, tagId: 182 },
      { imageId: 103, tagId: 221 },
      { imageId: 104, tagId: 65 },
      { imageId: 105, tagId: 41 },
      { imageId: 106, tagId: 49 },
      { imageId: 107, tagId: 293 },
      { imageId: 108, tagId: 234 },
      { imageId: 109, tagId: 250 },
      { imageId: 110, tagId: 105 },
      { imageId: 111, tagId: 37 },
      { imageId: 112, tagId: 35 },
      { imageId: 113, tagId: 238 },
      { imageId: 114, tagId: 210 },
      { imageId: 115, tagId: 284 },
      { imageId: 116, tagId: 299 },
      { imageId: 117, tagId: 183 },
      { imageId: 118, tagId: 142 },
      { imageId: 119, tagId: 121 },
      { imageId: 120, tagId: 280 },
      { imageId: 121, tagId: 69 },
      { imageId: 122, tagId: 268 },
      { imageId: 123, tagId: 298 },
      { imageId: 124, tagId: 300 },
      { imageId: 125, tagId: 221 },
      { imageId: 126, tagId: 296 },
      { imageId: 127, tagId: 114 },
      { imageId: 128, tagId: 180 },
      { imageId: 129, tagId: 258 },
      { imageId: 130, tagId: 42 },
      { imageId: 131, tagId: 292 },
      { imageId: 132, tagId: 140 },
      { imageId: 133, tagId: 77 },
      { imageId: 134, tagId: 198 },
      { imageId: 135, tagId: 74 },
      { imageId: 136, tagId: 49 },
      { imageId: 137, tagId: 147 },
      { imageId: 138, tagId: 172 },
      { imageId: 139, tagId: 10 },
      { imageId: 140, tagId: 158 },
      { imageId: 141, tagId: 210 },
      { imageId: 142, tagId: 205 },
      { imageId: 143, tagId: 94 },
      { imageId: 144, tagId: 300 },
      { imageId: 145, tagId: 228 },
      { imageId: 146, tagId: 124 },
      { imageId: 147, tagId: 124 },
      { imageId: 148, tagId: 222 },
      { imageId: 149, tagId: 6 },
      { imageId: 150, tagId: 86 },
      { imageId: 151, tagId: 299 },
      { imageId: 152, tagId: 68 },
      { imageId: 153, tagId: 133 },
      { imageId: 154, tagId: 293 },
      { imageId: 155, tagId: 166 },
      { imageId: 156, tagId: 218 },
      { imageId: 157, tagId: 126 },
      { imageId: 158, tagId: 235 },
      { imageId: 159, tagId: 222 },
      { imageId: 160, tagId: 108 },
      { imageId: 161, tagId: 80 },
      { imageId: 162, tagId: 287 },
      { imageId: 163, tagId: 80 },
      { imageId: 164, tagId: 192 },
      { imageId: 165, tagId: 275 },
      { imageId: 166, tagId: 245 },
      { imageId: 167, tagId: 208 },
      { imageId: 168, tagId: 132 },
      { imageId: 169, tagId: 69 },
      { imageId: 170, tagId: 249 },
      { imageId: 171, tagId: 296 },
      { imageId: 172, tagId: 258 },
      { imageId: 173, tagId: 212 },
      { imageId: 174, tagId: 209 },
      { imageId: 175, tagId: 99 },
      { imageId: 176, tagId: 72 },
      { imageId: 177, tagId: 179 },
      { imageId: 178, tagId: 141 },
      { imageId: 179, tagId: 100 },
      { imageId: 180, tagId: 187 },
      { imageId: 181, tagId: 192 },
      { imageId: 182, tagId: 35 },
      { imageId: 183, tagId: 106 },
      { imageId: 184, tagId: 82 },
      { imageId: 185, tagId: 1 },
      { imageId: 186, tagId: 104 },
      { imageId: 187, tagId: 154 },
      { imageId: 188, tagId: 137 },
      { imageId: 189, tagId: 112 },
      { imageId: 190, tagId: 216 },
      { imageId: 191, tagId: 154 },
      { imageId: 192, tagId: 203 },
      { imageId: 193, tagId: 109 },
      { imageId: 194, tagId: 252 },
      { imageId: 195, tagId: 89 },
      { imageId: 196, tagId: 170 },
      { imageId: 197, tagId: 11 },
      { imageId: 198, tagId: 55 },
      { imageId: 199, tagId: 75 },
      { imageId: 200, tagId: 76 },
      { imageId: 201, tagId: 158 },
      { imageId: 202, tagId: 186 },
      { imageId: 203, tagId: 174 },
      { imageId: 204, tagId: 193 },
      { imageId: 205, tagId: 130 },
      { imageId: 206, tagId: 255 },
      { imageId: 207, tagId: 73 },
      { imageId: 208, tagId: 47 },
      { imageId: 209, tagId: 269 },
      { imageId: 210, tagId: 27 },
      { imageId: 211, tagId: 235 },
      { imageId: 212, tagId: 204 },
      { imageId: 213, tagId: 43 },
      { imageId: 214, tagId: 32 },
      { imageId: 215, tagId: 86 },
      { imageId: 216, tagId: 34 },
      { imageId: 217, tagId: 118 },
      { imageId: 218, tagId: 92 },
      { imageId: 219, tagId: 184 },
      { imageId: 220, tagId: 236 },
      { imageId: 221, tagId: 23 },
      { imageId: 222, tagId: 294 },
      { imageId: 223, tagId: 32 },
      { imageId: 224, tagId: 23 },
      { imageId: 225, tagId: 155 },
      { imageId: 226, tagId: 280 },
      { imageId: 227, tagId: 266 },
      { imageId: 228, tagId: 20 },
      { imageId: 229, tagId: 74 },
      { imageId: 230, tagId: 205 },
      { imageId: 231, tagId: 293 },
      { imageId: 232, tagId: 215 },
      { imageId: 233, tagId: 126 },
      { imageId: 234, tagId: 37 },
      { imageId: 235, tagId: 146 },
      { imageId: 236, tagId: 20 },
      { imageId: 237, tagId: 281 },
      { imageId: 238, tagId: 22 },
      { imageId: 239, tagId: 88 },
      { imageId: 240, tagId: 65 },
      { imageId: 241, tagId: 54 },
      { imageId: 242, tagId: 110 },
      { imageId: 243, tagId: 198 },
      { imageId: 244, tagId: 116 },
      { imageId: 245, tagId: 137 },
      { imageId: 246, tagId: 76 },
      { imageId: 247, tagId: 149 },
      { imageId: 248, tagId: 58 },
      { imageId: 249, tagId: 213 },
      { imageId: 250, tagId: 209 },
      { imageId: 251, tagId: 51 },
      { imageId: 252, tagId: 118 },
      { imageId: 253, tagId: 42 },
      { imageId: 254, tagId: 233 },
      { imageId: 255, tagId: 268 },
      { imageId: 256, tagId: 219 },
      { imageId: 257, tagId: 14 },
      { imageId: 258, tagId: 253 },
      { imageId: 259, tagId: 26 },
      { imageId: 260, tagId: 54 },
      { imageId: 261, tagId: 107 },
      { imageId: 262, tagId: 61 },
      { imageId: 263, tagId: 111 },
      { imageId: 264, tagId: 264 },
      { imageId: 265, tagId: 259 },
      { imageId: 266, tagId: 51 },
      { imageId: 267, tagId: 43 },
      { imageId: 268, tagId: 65 },
      { imageId: 269, tagId: 188 },
      { imageId: 270, tagId: 286 },
      { imageId: 271, tagId: 13 },
      { imageId: 272, tagId: 32 },
      { imageId: 273, tagId: 148 },
      { imageId: 274, tagId: 152 },
      { imageId: 275, tagId: 10 },
      { imageId: 276, tagId: 87 },
      { imageId: 277, tagId: 45 },
      { imageId: 278, tagId: 205 },
      { imageId: 279, tagId: 70 },
      { imageId: 280, tagId: 145 },
      { imageId: 281, tagId: 255 },
      { imageId: 282, tagId: 58 },
      { imageId: 283, tagId: 3 },
      { imageId: 284, tagId: 215 },
      { imageId: 285, tagId: 85 },
      { imageId: 286, tagId: 205 },
      { imageId: 287, tagId: 133 },
      { imageId: 288, tagId: 203 },
      { imageId: 289, tagId: 289 },
      { imageId: 290, tagId: 298 },
      { imageId: 291, tagId: 200 },
      { imageId: 292, tagId: 279 },
      { imageId: 293, tagId: 260 },
      { imageId: 294, tagId: 296 },
      { imageId: 295, tagId: 53 },
      { imageId: 296, tagId: 1 },
      { imageId: 297, tagId: 14 },
      { imageId: 298, tagId: 198 },
      { imageId: 299, tagId: 248 },
      { imageId: 300, tagId: 262 },
      { imageId: 301, tagId: 102 },
      { imageId: 302, tagId: 55 },
      { imageId: 303, tagId: 211 },
      { imageId: 304, tagId: 25 },
      { imageId: 305, tagId: 93 },
      { imageId: 306, tagId: 90 },
      { imageId: 307, tagId: 248 },
      { imageId: 308, tagId: 263 },
      { imageId: 309, tagId: 30 },
      { imageId: 310, tagId: 46 },
      { imageId: 311, tagId: 69 },
      { imageId: 312, tagId: 272 },
      { imageId: 313, tagId: 282 },
      { imageId: 314, tagId: 251 },
      { imageId: 315, tagId: 204 },
      { imageId: 316, tagId: 268 },
      { imageId: 317, tagId: 167 },
      { imageId: 318, tagId: 57 },
      { imageId: 319, tagId: 7 },
      { imageId: 320, tagId: 86 },
      { imageId: 321, tagId: 293 },
      { imageId: 322, tagId: 67 },
      { imageId: 323, tagId: 271 },
      { imageId: 324, tagId: 88 },
      { imageId: 325, tagId: 230 },
      { imageId: 326, tagId: 73 },
      { imageId: 327, tagId: 123 },
      { imageId: 328, tagId: 21 },
      { imageId: 329, tagId: 290 },
      { imageId: 330, tagId: 68 },
      { imageId: 331, tagId: 291 },
      { imageId: 332, tagId: 170 },
      { imageId: 333, tagId: 208 },
      { imageId: 334, tagId: 78 },
      { imageId: 335, tagId: 229 },
      { imageId: 336, tagId: 166 },
      { imageId: 337, tagId: 192 },
      { imageId: 338, tagId: 257 },
      { imageId: 339, tagId: 202 },
      { imageId: 340, tagId: 205 },
      { imageId: 341, tagId: 123 },
      { imageId: 342, tagId: 243 },
      { imageId: 343, tagId: 262 },
      { imageId: 344, tagId: 288 },
      { imageId: 345, tagId: 11 },
      { imageId: 346, tagId: 249 },
      { imageId: 347, tagId: 273 },
      { imageId: 348, tagId: 280 },
      { imageId: 349, tagId: 237 },
      { imageId: 350, tagId: 160 },
      { imageId: 351, tagId: 94 },
      { imageId: 352, tagId: 289 },
      { imageId: 353, tagId: 223 },
      { imageId: 354, tagId: 195 },
      { imageId: 355, tagId: 178 },
      { imageId: 356, tagId: 138 },
      { imageId: 357, tagId: 166 },
      { imageId: 358, tagId: 18 },
      { imageId: 359, tagId: 203 },
      { imageId: 360, tagId: 172 },
      { imageId: 361, tagId: 67 },
      { imageId: 362, tagId: 45 },
      { imageId: 363, tagId: 230 },
      { imageId: 364, tagId: 267 },
      { imageId: 365, tagId: 204 },
      { imageId: 366, tagId: 128 },
      { imageId: 367, tagId: 254 },
      { imageId: 368, tagId: 273 },
      { imageId: 369, tagId: 126 },
      { imageId: 370, tagId: 171 },
      { imageId: 371, tagId: 27 },
      { imageId: 372, tagId: 202 },
      { imageId: 373, tagId: 165 },
      { imageId: 374, tagId: 61 },
      { imageId: 375, tagId: 187 },
      { imageId: 376, tagId: 191 },
      { imageId: 377, tagId: 20 },
      { imageId: 378, tagId: 172 },
      { imageId: 379, tagId: 91 },
      { imageId: 380, tagId: 43 },
      { imageId: 381, tagId: 102 },
      { imageId: 382, tagId: 231 },
      { imageId: 383, tagId: 121 },
      { imageId: 384, tagId: 34 },
      { imageId: 385, tagId: 112 },
      { imageId: 386, tagId: 229 },
      { imageId: 387, tagId: 93 },
      { imageId: 388, tagId: 98 },
      { imageId: 389, tagId: 156 },
      { imageId: 390, tagId: 154 },
      { imageId: 391, tagId: 214 },
      { imageId: 392, tagId: 163 },
      { imageId: 393, tagId: 30 },
      { imageId: 394, tagId: 158 },
      { imageId: 395, tagId: 293 },
      { imageId: 396, tagId: 14 },
      { imageId: 397, tagId: 151 },
      { imageId: 398, tagId: 264 },
      { imageId: 399, tagId: 246 },
      { imageId: 400, tagId: 188 },
      { imageId: 401, tagId: 37 },
      { imageId: 402, tagId: 107 },
      { imageId: 403, tagId: 253 },
      { imageId: 404, tagId: 257 },
      { imageId: 405, tagId: 232 },
      { imageId: 406, tagId: 163 },
      { imageId: 407, tagId: 208 },
      { imageId: 408, tagId: 169 },
      { imageId: 409, tagId: 298 },
      { imageId: 410, tagId: 289 },
      { imageId: 411, tagId: 91 },
      { imageId: 412, tagId: 247 },
      { imageId: 413, tagId: 14 },
      { imageId: 414, tagId: 27 },
      { imageId: 415, tagId: 8 },
      { imageId: 416, tagId: 108 },
      { imageId: 417, tagId: 54 },
      { imageId: 418, tagId: 232 },
      { imageId: 419, tagId: 278 },
      { imageId: 420, tagId: 68 },
      { imageId: 421, tagId: 88 },
      { imageId: 422, tagId: 20 },
      { imageId: 423, tagId: 56 },
      { imageId: 424, tagId: 241 },
      { imageId: 425, tagId: 262 },
      { imageId: 426, tagId: 204 },
      { imageId: 427, tagId: 5 },
      { imageId: 428, tagId: 198 },
      { imageId: 429, tagId: 206 },
      { imageId: 430, tagId: 61 },
      { imageId: 431, tagId: 47 },
      { imageId: 432, tagId: 177 },
      { imageId: 433, tagId: 192 },
      { imageId: 434, tagId: 40 },
      { imageId: 435, tagId: 181 },
      { imageId: 436, tagId: 44 },
      { imageId: 437, tagId: 230 },
      { imageId: 438, tagId: 59 },
      { imageId: 439, tagId: 287 },
      { imageId: 440, tagId: 121 },
      { imageId: 441, tagId: 87 },
      { imageId: 442, tagId: 276 },
      { imageId: 443, tagId: 116 },
      { imageId: 444, tagId: 56 },
      { imageId: 445, tagId: 133 },
      { imageId: 446, tagId: 119 },
      { imageId: 447, tagId: 14 },
      { imageId: 448, tagId: 298 },
      { imageId: 449, tagId: 202 },
      { imageId: 450, tagId: 67 },
      { imageId: 451, tagId: 115 },
      { imageId: 452, tagId: 279 },
      { imageId: 453, tagId: 182 },
      { imageId: 454, tagId: 59 },
      { imageId: 455, tagId: 218 },
      { imageId: 456, tagId: 154 },
      { imageId: 457, tagId: 110 },
      { imageId: 458, tagId: 248 },
      { imageId: 459, tagId: 88 },
      { imageId: 460, tagId: 249 },
      { imageId: 461, tagId: 122 },
      { imageId: 462, tagId: 20 },
      { imageId: 463, tagId: 163 },
      { imageId: 464, tagId: 203 },
      { imageId: 465, tagId: 125 },
      { imageId: 466, tagId: 160 },
      { imageId: 467, tagId: 251 },
      { imageId: 468, tagId: 144 },
      { imageId: 469, tagId: 169 },
      { imageId: 470, tagId: 141 },
      { imageId: 471, tagId: 41 },
      { imageId: 472, tagId: 150 },
      { imageId: 473, tagId: 177 },
      { imageId: 474, tagId: 56 },
      { imageId: 475, tagId: 157 },
      { imageId: 476, tagId: 163 },
      { imageId: 477, tagId: 76 },
      { imageId: 478, tagId: 35 },
      { imageId: 479, tagId: 56 },
      { imageId: 480, tagId: 209 },
      { imageId: 481, tagId: 245 },
      { imageId: 482, tagId: 253 },
      { imageId: 483, tagId: 210 },
      { imageId: 484, tagId: 268 },
      { imageId: 485, tagId: 100 },
      { imageId: 486, tagId: 84 },
      { imageId: 487, tagId: 77 },
      { imageId: 488, tagId: 280 },
      { imageId: 489, tagId: 232 },
      { imageId: 490, tagId: 299 },
      { imageId: 491, tagId: 231 },
      { imageId: 492, tagId: 130 },
      { imageId: 493, tagId: 28 },
      { imageId: 494, tagId: 53 },
      { imageId: 495, tagId: 221 },
      { imageId: 496, tagId: 182 },
      { imageId: 497, tagId: 246 },
      { imageId: 498, tagId: 270 },
      { imageId: 499, tagId: 280 },
      { imageId: 500, tagId: 61 },
      { imageId: 501, tagId: 213 },
      { imageId: 502, tagId: 180 },
      { imageId: 503, tagId: 69 },
      { imageId: 504, tagId: 238 },
      { imageId: 505, tagId: 199 },
      { imageId: 506, tagId: 109 },
      { imageId: 507, tagId: 265 },
      { imageId: 508, tagId: 220 },
      { imageId: 509, tagId: 23 },
      { imageId: 510, tagId: 85 },
      { imageId: 511, tagId: 7 },
      { imageId: 512, tagId: 149 },
      { imageId: 513, tagId: 159 },
      { imageId: 514, tagId: 192 },
      { imageId: 515, tagId: 75 },
      { imageId: 516, tagId: 224 },
      { imageId: 517, tagId: 233 },
      { imageId: 518, tagId: 218 },
      { imageId: 519, tagId: 152 },
      { imageId: 520, tagId: 138 },
      { imageId: 521, tagId: 216 },
      { imageId: 522, tagId: 57 },
      { imageId: 523, tagId: 242 },
      { imageId: 524, tagId: 206 },
      { imageId: 525, tagId: 83 },
      { imageId: 526, tagId: 142 },
      { imageId: 527, tagId: 205 },
      { imageId: 528, tagId: 9 },
      { imageId: 529, tagId: 226 },
      { imageId: 530, tagId: 149 },
      { imageId: 531, tagId: 187 },
      { imageId: 532, tagId: 200 },
      { imageId: 533, tagId: 194 },
      { imageId: 534, tagId: 5 },
      { imageId: 535, tagId: 49 },
      { imageId: 536, tagId: 283 },
      { imageId: 537, tagId: 171 },
      { imageId: 538, tagId: 62 },
      { imageId: 539, tagId: 234 },
      { imageId: 540, tagId: 239 },
      { imageId: 541, tagId: 116 },
      { imageId: 542, tagId: 255 },
      { imageId: 543, tagId: 64 },
      { imageId: 544, tagId: 297 },
      { imageId: 545, tagId: 132 },
      { imageId: 546, tagId: 77 },
      { imageId: 547, tagId: 82 },
      { imageId: 548, tagId: 10 },
      { imageId: 549, tagId: 59 },
      { imageId: 550, tagId: 109 },
      { imageId: 551, tagId: 249 },
      { imageId: 552, tagId: 263 },
      { imageId: 553, tagId: 173 },
      { imageId: 554, tagId: 239 },
      { imageId: 555, tagId: 68 },
      { imageId: 556, tagId: 284 },
      { imageId: 557, tagId: 203 },
      { imageId: 558, tagId: 170 },
      { imageId: 559, tagId: 264 },
      { imageId: 560, tagId: 253 },
      { imageId: 561, tagId: 168 },
      { imageId: 562, tagId: 300 },
      { imageId: 563, tagId: 180 },
      { imageId: 564, tagId: 31 },
      { imageId: 565, tagId: 116 },
      { imageId: 566, tagId: 255 },
      { imageId: 567, tagId: 218 },
      { imageId: 568, tagId: 226 },
      { imageId: 569, tagId: 37 },
      { imageId: 570, tagId: 46 },
      { imageId: 571, tagId: 267 },
      { imageId: 572, tagId: 276 },
      { imageId: 573, tagId: 222 },
      { imageId: 574, tagId: 80 },
      { imageId: 575, tagId: 295 },
      { imageId: 576, tagId: 235 },
      { imageId: 577, tagId: 263 },
      { imageId: 578, tagId: 175 },
      { imageId: 579, tagId: 190 },
      { imageId: 580, tagId: 62 },
      { imageId: 581, tagId: 175 },
      { imageId: 582, tagId: 22 },
      { imageId: 583, tagId: 76 },
      { imageId: 584, tagId: 273 },
      { imageId: 585, tagId: 4 },
      { imageId: 586, tagId: 77 },
      { imageId: 587, tagId: 200 },
      { imageId: 588, tagId: 231 },
      { imageId: 589, tagId: 163 },
      { imageId: 590, tagId: 135 },
      { imageId: 591, tagId: 291 },
      { imageId: 592, tagId: 239 },
      { imageId: 593, tagId: 37 },
      { imageId: 594, tagId: 66 },
      { imageId: 595, tagId: 123 },
      { imageId: 596, tagId: 225 },
      { imageId: 597, tagId: 127 },
      { imageId: 598, tagId: 209 },
      { imageId: 599, tagId: 224 },
      { imageId: 600, tagId: 241 },
      { imageId: 601, tagId: 170 },
      { imageId: 602, tagId: 41 },
      { imageId: 603, tagId: 207 },
      { imageId: 604, tagId: 181 },
      { imageId: 605, tagId: 71 },
      { imageId: 606, tagId: 90 },
      { imageId: 607, tagId: 261 },
      { imageId: 608, tagId: 67 },
      { imageId: 609, tagId: 37 },
      { imageId: 610, tagId: 178 },
      { imageId: 611, tagId: 255 },
      { imageId: 612, tagId: 263 },
      { imageId: 613, tagId: 213 },
      { imageId: 614, tagId: 199 },
      { imageId: 615, tagId: 229 },
      { imageId: 616, tagId: 294 },
      { imageId: 617, tagId: 251 },
      { imageId: 618, tagId: 296 },
      { imageId: 619, tagId: 38 },
      { imageId: 620, tagId: 64 },
      { imageId: 621, tagId: 80 },
      { imageId: 622, tagId: 129 },
      { imageId: 623, tagId: 185 },
      { imageId: 624, tagId: 98 },
      { imageId: 625, tagId: 78 },
      { imageId: 626, tagId: 22 },
      { imageId: 627, tagId: 181 },
      { imageId: 628, tagId: 64 },
      { imageId: 629, tagId: 261 },
      { imageId: 630, tagId: 187 },
      { imageId: 631, tagId: 154 },
      { imageId: 632, tagId: 108 },
      { imageId: 633, tagId: 156 },
      { imageId: 634, tagId: 177 },
      { imageId: 635, tagId: 54 },
      { imageId: 636, tagId: 30 },
      { imageId: 637, tagId: 78 },
      { imageId: 638, tagId: 29 },
      { imageId: 639, tagId: 208 },
      { imageId: 640, tagId: 108 },
      { imageId: 641, tagId: 277 },
      { imageId: 642, tagId: 139 },
      { imageId: 643, tagId: 108 },
      { imageId: 644, tagId: 89 },
      { imageId: 645, tagId: 120 },
      { imageId: 646, tagId: 6 },
      { imageId: 647, tagId: 258 },
      { imageId: 648, tagId: 70 },
      { imageId: 649, tagId: 6 },
      { imageId: 650, tagId: 160 },
      { imageId: 651, tagId: 250 },
      { imageId: 652, tagId: 117 },
      { imageId: 653, tagId: 63 },
      { imageId: 654, tagId: 99 },
      { imageId: 655, tagId: 185 },
      { imageId: 656, tagId: 192 },
      { imageId: 657, tagId: 98 },
      { imageId: 658, tagId: 248 },
      { imageId: 659, tagId: 39 },
      { imageId: 660, tagId: 25 },
      { imageId: 661, tagId: 267 },
      { imageId: 662, tagId: 126 },
      { imageId: 663, tagId: 131 },
      { imageId: 664, tagId: 157 },
      { imageId: 665, tagId: 48 },
      { imageId: 666, tagId: 231 },
      { imageId: 667, tagId: 245 },
      { imageId: 668, tagId: 29 },
      { imageId: 669, tagId: 129 },
      { imageId: 670, tagId: 155 },
      { imageId: 671, tagId: 240 },
      { imageId: 672, tagId: 41 },
      { imageId: 673, tagId: 71 },
      { imageId: 674, tagId: 272 },
      { imageId: 675, tagId: 7 },
      { imageId: 676, tagId: 35 },
      { imageId: 677, tagId: 18 },
      { imageId: 678, tagId: 142 },
      { imageId: 679, tagId: 106 },
      { imageId: 680, tagId: 244 },
      { imageId: 681, tagId: 15 },
      { imageId: 682, tagId: 297 },
      { imageId: 683, tagId: 86 },
      { imageId: 684, tagId: 86 },
      { imageId: 685, tagId: 241 },
      { imageId: 686, tagId: 280 },
      { imageId: 687, tagId: 73 },
      { imageId: 688, tagId: 14 },
      { imageId: 689, tagId: 37 },
      { imageId: 690, tagId: 167 },
      { imageId: 691, tagId: 290 },
      { imageId: 692, tagId: 243 },
      { imageId: 693, tagId: 101 },
      { imageId: 694, tagId: 36 },
      { imageId: 695, tagId: 298 },
      { imageId: 696, tagId: 185 },
      { imageId: 697, tagId: 197 },
      { imageId: 698, tagId: 85 },
      { imageId: 699, tagId: 221 },
      { imageId: 700, tagId: 189 },
      { imageId: 701, tagId: 247 },
      { imageId: 702, tagId: 209 },
      { imageId: 703, tagId: 167 }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('ImageTags', {
      tagId: { [Op.lte]: 300}
    }, {})
  }
};
