/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import expressions from "./expressions";
import eventListeners from "./event-listeners";
import sources from "./sources";
import breakpoints from "./breakpoints";
import pendingBreakpoints from "./pending-breakpoints";
import asyncRequests from "./async-requests";
import pause from "./pause";
import ui from "./ui";
import ast from "./ast";
import coverage from "./coverage";
import projectTextSearch from "./project-text-search";
import sourceSearch from "./source-search";

export default {
  expressions,
  eventListeners,
  sources,
  breakpoints,
  pendingBreakpoints,
  asyncRequests,
  pause,
  ui,
  ast,
  coverage,
  projectTextSearch,
  sourceSearch
};
