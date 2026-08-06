import {
  FaBoxOpen,
  FaBuilding,
  FaCouch,
  FaPaintRoller,
  FaPlug,
  FaScrewdriverWrench,
  FaTruck,
  FaWarehouse,
} from "react-icons/fa6";

import type { Service } from "../types/Service";

export const services: Service[] = [
  {
    title: "שירותי הובלה",
    description:
      "הובלות קטנות ובינוניות של דירות, רהיטים, מוצרי חשמל ופריטים בודדים.",
    icon: FaTruck,
  },
  {
    title: "הובלות לעסקים וחברות",
    description:
      "העברת משרדים, ציוד עסקי וריהוט תוך שמירה על סדר, זהירות ועמידה בזמנים.",
    icon: FaBuilding,
  },
  {
    title: "אחסון רהיטים",
    description:
      "פתרונות אחסון נוחים ובטוחים לרהיטים ולפריטים נבחרים בהתאם לצורך.",
    icon: FaWarehouse,
  },
  {
    title: "העברות ריהוט",
    description:
      "הובלת ספות, ארונות, שולחנות ורהיטים בודדים בצורה מקצועית וזהירה.",
    icon: FaCouch,
  },
  {
    title: "פירוק והרכבה",
    description: "פירוק והרכבת רהיטים כחלק משירות ההובלה או כשירות עצמאי.",
    icon: FaScrewdriverWrench,
  },
  {
    title: "עבודות הנדימן",
    description:
      "פתרונות קטנים לבית ולעסק, התקנות, תיקונים ועבודות תחזוקה שונות.",
    icon: FaBoxOpen,
  },
  {
    title: "שירותי צביעה קלים",
    description:
      "צביעת קירות, תיקונים נקודתיים ורענון חללים לאחר מעבר או פינוי.",
    icon: FaPaintRoller,
  },
  {
    title: "עבודות חשמל קטנות",
    description: "טיפול בעבודות חשמל בסיסיות והתקנות קטנות בהתאם לצורך.",
    icon: FaPlug,
  },
];
