class Util {
    public static greenCheck(platform) {
        if (platform.startsWith("win")) {
            return "√";
        } else {
            return "✔";
        }
    }
}

export { Util };