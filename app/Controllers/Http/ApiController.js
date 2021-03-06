
"use strict";
const Helpers = use("Helpers");
const appRoot = Helpers.appRoot();
class ApiController {
  async rando({ request, response }) {
    const randoInt = await this.getRandomInt(2);
    let imageType;
    switch (randoInt) {
      case 0:
        imageType = "gif";
        break;
      case 1:
        imageType = "jpg";
        break;
    }
    response.type("image/jpeg");
    console.log(
      `${appRoot}/public/images/kittyFi_${await this.getRandomInt(
        500
      )}.${imageType}`
    );
    response.download(
      `${appRoot}/public/images/kittyFi_${await this.getRandomInt(
        500
      )}.${imageType}`
    );
  }

  async getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}

module.exports = ApiController;
