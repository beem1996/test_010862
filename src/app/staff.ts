export class Staff {
 
    constructor(
      public id: number,
      public name: string,
      //ฝ่ายหรือแผนก
      public department: string,
      //การต่อท้ายด้วยเครื่องหมาย ? เพื่อกำหนดให้เป็นรายการ option กำหนดค่า paramenter หรือไม่ก็ได้ ตอนใช้งาน
      public age?: number
    ) {  }
   
  }