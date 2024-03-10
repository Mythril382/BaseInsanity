Events.on(ClientLoadEvent, e => {
    Reflect.set(BaseGenerator, "insanity", true);
});