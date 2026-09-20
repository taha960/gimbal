import { _ as Navigate, b as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as Route } from "./_ssr/router-CMwb5BA9.mjs";
import { n as CHAPTERS, t as AppFrame } from "./_ssr/app-frame-p0QjylP5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_chapterId-Ba0buPDS.js
var import_jsx_runtime = require_jsx_runtime();
function isChapterId(value) {
	return CHAPTERS.some((chapter) => chapter.id === value);
}
function ChapterRoute() {
	const { chapterId } = Route.useParams();
	if (!isChapterId(chapterId)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: "/" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppFrame, { chapterId });
}
//#endregion
export { ChapterRoute as component };
