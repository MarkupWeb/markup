// Images
import sine from "../../../../../../public/images/other_brands/01-sine.png";
import dr_cut from "../../../../../../public/images/other_brands/02-dr_cut.png";
import dasta_cafe from "../../../../../../public/images/other_brands/03-dasta_cafe.png";
import drivera from "../../../../../../public/images/other_brands/04-drivera.png";
import elagora from "../../../../../../public/images/other_brands/05-elagora.png";
import trio_mood from "../../../../../../public/images/other_brands/06-trio_mood.png";
import elaf from "../../../../../../public/images/other_brands/07-elaf.png";
import Dr_Rash_plastic_surgery_clinic from "../../../../../../public/images/other_brands/08-Dr_Rash_plastic_surgery_clinic.png";
import lines from "../../../../../../public/images/other_brands/09-lines.png";
import organo from "../../../../../../public/images/other_brands/10-organo.png";
import skyhills from "../../../../../../public/images/other_brands/11-skyhills.png";
import harm_elsham from "../../../../../../public/images/other_brands/12-harm_elsham.png";
import cairo_guys from "../../../../../../public/images/other_brands/13-cairo_guys.png";
import fish_fish from "../../../../../../public/images/other_brands/14-fish_fish.png";
import hambrger_coses from "../../../../../../public/images/other_brands/15-hambrger&coses.png";
import fool_nor from "../../../../../../public/images/other_brands/16-fool_nor.png";
import koshary_elkdawy from "../../../../../../public/images/other_brands/17-koshary_elkdawy.png";
import checken_fila from "../../../../../../public/images/other_brands/18-checken_fila.png";
import adrnalin from "../../../../../../public/images/other_brands/19-adrnalin.png";
import kababgy_elsyda from "../../../../../../public/images/other_brands/20-kababgy-elsyda.png";
import X_Larg from "../../../../../../public/images/other_brands/21-X_Larg.png";
import Smatshd from "../../../../../../public/images/other_brands/22-Smatshd.png";
import checken_planet from "../../../../../../public/images/other_brands/23-checken_planet.png";
import Ftar_Asha from "../../../../../../public/images/other_brands/24-Ftar&Asha.png";
import CIRCUS from "../../../../../../public/images/other_brands/25-CIRCUS.png";

interface ContentItem {
  title: string;
  description: string;
}

// CAROUSEL DATA

interface DataType {
  id?: number;
  heading?: string;
  heading2?: string;
  imgSrc?: any;
  name?: string;
  content?: ContentItem[]; // Add this property
}

const PartnersTwoData = (t: (key: string) => string): DataType[] => [
  {
    id: 1,
    imgSrc: sine,
  },

  {
    id: 2,
    imgSrc: dr_cut,
  },

  {
    id: 3,
    imgSrc: dasta_cafe,
  },

  {
    id: 4,
    imgSrc: drivera,
  },
  {
    id: 5,
    imgSrc: elagora,
  },
  {
    id: 6,
    imgSrc: trio_mood,
  },

  {
    id: 7,
    imgSrc: elaf,
  },

  {
    id: 8,
    imgSrc: Dr_Rash_plastic_surgery_clinic,
  },
  {
    id: 9,
    imgSrc: lines,
  },

  // {
  //   id: 10,
  //   imgSrc: organo,
  // },

  {
    id: 11,
    imgSrc: skyhills,
  },


  {
    id: 12,
    imgSrc: harm_elsham,
  },


  {
    id: 13,
    imgSrc: cairo_guys,
  },
{
    id: 14,
    imgSrc: fish_fish,
  },
{
    id: 15,
    imgSrc: hambrger_coses,
  },
{
    id: 16,
    imgSrc: fool_nor,
  },
{
    id: 17,
    imgSrc: koshary_elkdawy,
  },
{
    id: 18,
    imgSrc: checken_fila,
  },
{
    id: 19,
    imgSrc: adrnalin,
  },
  {
    id: 20,
    imgSrc: kababgy_elsyda,
  },
{
    id: 21,
    imgSrc: X_Larg,
  },
{
    id: 22,
    imgSrc: checken_planet,
  },
{
    id: 23,
    imgSrc: Smatshd,
  },
{
    id: 24,
    imgSrc: Ftar_Asha,
  },
{
    id: 25,
    imgSrc: CIRCUS,
  },

  // Add more items similarly...
];

export default PartnersTwoData;
