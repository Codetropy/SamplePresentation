define(["knockout", "sample"], function(ko, Sample) {

    return  new Sample("8- binding providers", "eight", [
        new Sample.State("intro", "intro", { loadAsSection: true, hideTitle: true }),
        new Sample.State("start","start", { forceLoad: true })
    ]);

});