class Util {
    public static greenCheck(platform, skipStep) {
        if (!skipStep) {
            return null;
        }
        if (platform.startsWith("win")) {
            return "√";
        } else {
            return "✔";
        }
    }
}

export { Util };