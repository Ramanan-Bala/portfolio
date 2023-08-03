// document.addEventListener("DOMContentLoaded", () => {
//   setTimeout(() => {
//     const cursor = document.getElementById("cursor");
//     const cursorDot = document.getElementById("cursorDot");

//     window.onpointermove = (e) => {
//       const { clientX, clientY } = e;

//       const keyframe = {
//         left: `${clientX}px`,
//         top: `${clientY}px`,
//       };

//       const option = (time) => {
//         return {
//           duration: time,
//           fill: "forwards",
//         };
//       };

//       cursor.animate(keyframe, option(300));

//       cursorDot.animate(keyframe, option(600));
//     };

//     function setCursor(size, border, opacity, bg) {
//       cursor.style.width = `${size}px`;
//       cursor.style.height = `${size}px`;
//       if (opacity) cursor.style.opacity = opacity;
//       if (border) cursor.style.borderWidth = `${border}px`;
//       if (bg) cursor.style.backgroundColor = bg;
//     }

//     window.addEventListener("mousedown", (e) => {
//       setCursor(48, 1.5);
//     });

//     window.addEventListener("mouseup", (e) => {
//       const cursorStyle = window.getComputedStyle(e.target)["cursor"];
//       setCursor(24, 2);
//       setTimeout(() => {
//         if (cursorStyle === "pointer") {
//           setCursor(48);
//         }
//       }, 100);
//     });

//     const handleMove = (e) => {
//       const cursorStyle = window.getComputedStyle(e.target)["cursor"];

//       let p = (e.clientX / window.innerWidth) * 100;
//       if (cursorStyle === "pointer") setCursor(48, 1.5, 0.2, "#f2f2f2");
//       else setCursor(24, 1.5, 1, "transparent");
//     };

//     document.onmousemove = (e) => handleMove(e);

//     document.ontouchmove = (e) => handleMove(e.touches[0]);
//   }, 2500);
// });
