const importImages = (r) =>
  r.keys().map((key) => ({
    src: r(key),
    alt: key.replace("./", "").replace(/\.[^/.]+$/, ""),
  }));

// Carga de imágenes de distintas carpetas
const homeImages = {
  yaingodoy: require("../img/home/yaingodoy.webp"),
  maqueta3d: require("../img/home/maqueta3D.webp"),
  freelance: require("../img/home/freelance.webp"),
  empleado: require("../img/home/empleado.webp"),
  concursos: require("../img/home/concursos.webp"),
  software: require("../img/home/software.webp"),
  dev: require("../img/home/dev.webp"),
};
const homeImagesHD = {
  yaingodoy: require("../img/home/hd/yaingodoy.png"),
  maqueta3d: require("../img/home/hd/maqueta3D.jpg"),
  freelance: require("../img/home/hd/freelance.jpg"),
  empleado: require("../img/home/hd/empleado.jpg"),
  concursos: require("../img/home/hd/concursos.jpg"),
  software: require("../img/home/hd/software.png"),
  dev: require("../img/home/hd/dev.png"),
};

// Imágenes SD
const gmImages = importImages(
  require.context("../img/freelance/German", false, /\.(webp|jpg|png)$/)
);
const jfImages = importImages(
  require.context("../img/freelance/Juanfran", false, /\.(webp|jpg|png)$/)
);
const aguImages = importImages(
  require.context("../img/freelance/Agu", false, /\.(webp|jpg|png)$/)
);
const aguplanoImages = importImages(
  require.context("../img/freelance/Agu/planos", false, /\.(webp|jpg|png)$/)
);

const mcImages = importImages(
  require.context("../img/freelance/San Javier", false, /\.(webp|jpg|png)$/)
);
const cpImages = importImages(
  require.context("../img/concursos/cp", false, /\.(webp|jpg|png)$/)
);
const eeImages = importImages(
  require.context("../img/concursos/ee", false, /\.(webp|jpg|png)$/)
);
const rukaImages = importImages(
  require.context("../img/empleado/ruka", false, /\.(webp|jpg|png)$/)
);
const sjImages = importImages(
  require.context("../img/empleado/sj", false, /\.(webp|jpg|png)$/)
);
const bimImages = importImages(
  require.context("../img/3d/bim", false, /\.(webp|jpg|png)$/)
);
const mitreImages = importImages(
  require.context("../img/3d/mitre", false, /\.(webp|jpg|png)$/)
);

// Imágenes HD
const gmImagesHD = importImages(
  require.context("../img/freelance/German/hd", false, /\.(webp|jpg|png)$/)
);
const jfImagesHD = importImages(
  require.context("../img/freelance/Juanfran/hd", false, /\.(webp|jpg|png)$/)
);
const aguImagesHD = importImages(
  require.context("../img/freelance/Agu/hd", false, /\.(webp|jpg|png)$/)
);
const aguplanoImagesHD = importImages(
  require.context("../img/freelance/Agu/planos/hd", false, /\.(webp|jpg|png)$/)
);
const mcImagesHD = importImages(
  require.context("../img/freelance/San Javier/hd", false, /\.(webp|jpg|png)$/)
);
const cpImagesHD = importImages(
  require.context("../img/concursos/cp/hd", false, /\.(webp|jpg|png)$/)
);
const eeImagesHD = importImages(
  require.context("../img/concursos/ee/hd", false, /\.(webp|jpg|png)$/)
);
const rukaImagesHD = importImages(
  require.context("../img/empleado/ruka/hd", false, /\.(webp|jpg|png)$/)
);
const sjImagesHD = importImages(
  require.context("../img/empleado/sj/hd", false, /\.(webp|jpg|png)$/)
);
const bimImagesHD = importImages(
  require.context("../img/3d/bim/hd", false, /\.(webp|jpg|png)$/)
);
const mitreImagesHD = importImages(
  require.context("../img/3d/mitre/hd", false, /\.(webp|jpg|png)$/)
);

export {
  homeImages,
  homeImagesHD,
  gmImages,
  gmImagesHD,
  jfImages,
  jfImagesHD,
  aguImages,
  aguImagesHD,
  aguplanoImages,
  aguplanoImagesHD,
  mcImages,
  mcImagesHD,
  cpImages,
  cpImagesHD,
  eeImages,
  eeImagesHD,
  rukaImages,
  rukaImagesHD,
  sjImages,
  sjImagesHD,
  bimImages,
  bimImagesHD,
  mitreImages,
  mitreImagesHD,
};
