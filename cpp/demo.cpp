#include <iostream>
#include <cmath>

extern "C" __declspec(dllexport) double add(double a, double b) {
    return a + b;
}

extern "C" __declspec(dllexport) double subtract(double a, double b) {
    return a - b;
}

extern "C" __declspec(dllexport) double multiply(double a, double b) {
    return a * b;
}

extern "C" __declspec(dllexport) double divide(double a, double b) {
    if (b == 0.0) {
        std::cerr << "Error: Division by zero." << std::endl;
        return 0.0;
    }
    return a / b;
}
