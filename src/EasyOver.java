public class EasyOver {
    static void go(byte x) { System.out.print("int "); }
    static void go(long x) { System.out.print("long "); }
    static void go(double x) { System.out.print("double "); }
    public static void main(String [] args) {
        int b = 5;
        short s = 5;
        long l = 5;
        float f = 5.0f;
        go(b); go(s); go(l); go(f);
    }
}
