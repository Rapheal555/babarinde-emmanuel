"use client";

import { useState } from "react";

export default function Diagnose({ selectedValue }: any) {
  // alert(selectedValue);
  // console.log(selectedValue);
  // const value = selectedValue!.map((val: any) => {
  //   return val;
  // });
  // const v = value();
  // const [diagnosis, setDiagnosis] = useState<any>();
  // NOTE
  // A = HIGH TEMPERATURE (FEVER)
  // B = HEADACHE
  // C = FATIGUE
  // D = COUGH
  // E = NAUSEA
  // ['A', 'B']

  switch (selectedValue.join("")) {
    case "A":
      alert("you have not answered the questions a");

      // setDiagnosis("Fever");

      break;
    case "B":
      // setDiagnosis("Headache");
      break;
    case "C":
      // setDiagnosis("Fatigue");
      break;
    case "D":
      // setDiagnosis("Cough");
      break;
    case "E":
      // setDiagnosis("Nausea");
      break;
    case "AB":
      alert("you have not answered the questions ab");

      // setDiagnosis(6);
      break;
    case "AC":
      alert("you have not answered the questions ac");

      // setDiagnosis(7);
      break;
    case "AD":
      // setDiagnosis(8);
      break;
    case "AE":
      // setDiagnosis(1);

      break;
    case "BC":
      // setDiagnosis(2);
      break;
    case "BD":
      // setDiagnosis(3);
      break;
    case "BE":
      // setDiagnosis(4);
      break;
    case "CD":
      // setDiagnosis(5);
      break;
    case "CE":
      // setDiagnosis(6);
      break;
    case "DE":
      // setDiagnosis(7);
      break;
    case "ABC":
      // setDiagnosis(8);
      break;
    case "ABD":
      // setDiagnosis(1);

      break;
    case "ABE":
      // setDiagnosis(2);
      break;
    case "ACD":
      // setDiagnosis(3);
      break;
    case "ACE":
      // setDiagnosis(4);
      break;
    case "ADE":
      // setDiagnosis(5);
      break;
    case "BCD":
      // setDiagnosis(6);
      break;
    case "BCE":
      // setDiagnosis(7);
      break;
    case "BDE":
      // setDiagnosis(8);
      break;
    case "CDE":
      // setDiagnosis(1);

      break;
    case "ABCD":
      // setDiagnosis(2);
      break;
    case "ABCE":
      // setDiagnosis(3);
      break;
    case "ABDE":
      // setDiagnosis(4);
      break;
    case "ACDE":
      // setDiagnosis(6);
      break;
    case "BCDE":
      // setDiagnosis(5);
      break;

    case "ABCDE":
      // setDiagnosis(7);
      break;
    case "":
      // setDiagnosis(8);
      break;

    default:
      alert("you have not answered the questions nooo");
      break;
  }

  //   alert(diagnosis);
  const result = () => {};
  return { result };
}
