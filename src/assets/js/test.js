jQuery(document).ready(function () {
    jQuery('.fullscreenbanner').revolution({
      delay: 9000,
      startwidth: 960,
      startheight: 500,
      autoHeight: "off",
      fullScreenAlignForce: "off",

      onHoverStop: "on",

      thumbWidth: 100,
      thumbHeight: 50,
      thumbAmount: 3,

      hideThumbsOnMobile: "off",
      hideBulletsOnMobile: "off",
      hideArrowsOnMobile: "off",
      hideThumbsUnderResoluition: 0,

      hideThumbs: 0,

      navigationType: "bullet",
      navigationArrows: "solo",
      navigationStyle: "round",

      navigationHAlign: "center",
      navigationVAlign: "bottom",
      navigationHOffset: 30,
      navigationVOffset: 30,

      soloArrowLeftHalign: "left",
      soloArrowLeftValign: "center",
      soloArrowLeftHOffset: 20,
      soloArrowLeftVOffset: 0,

      soloArrowRightHalign: "right",
      soloArrowRightValign: "center",
      soloArrowRightHOffset: 20,
      soloArrowRightVOffset: 0,


      touchenabled: "on",

      stopAtSlide: -1,
      stopAfterLoops: -1,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      hideSliderAtLimit: 0,

      dottedOverlay: "none",

      fullWidth: "off",
      forceFullWidth: "off",
      fullScreen: "off",
      fullScreenOffsetContainer: "#topheader-to-offset",

      shadow: 0

    });

  });