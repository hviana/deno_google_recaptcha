/*
Created by: Henrique Emanoel Viana
Githu: https://github.com/hviana
Page: https://sites.google.com/view/henriqueviana
cel: +55 (41) 99999-4664
*/

export class RECaptcha {
  static async verify(
    secret: string,
    responseToken: string,
    score: number = 0.5,
  ) {
    const result = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/json",
        },
        body: `secret=${secret}&response=${responseToken}`,
      },
    );
    const res = await result.json();
    if (res.success) {
      if (res.score !== undefined) {
        return res.score >= score;
      }
      return true;
    }
    return false;
  }
}
