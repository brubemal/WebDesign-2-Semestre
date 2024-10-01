#include<stdio.h>
#include<stdlib.h>

void alocaFloat(float **p, int q);
void alocaInt(int **p, int q);
void cadastraTemperaturas(float *p, int q);
void mediaTemp(float *p, int q, float *media);
void exibeMediaTemperatura(float media);
int main() {
int dias = 30;
float *temperaturas = NULL, media = 0;
alocaFloat(&temperaturas, dias);
cadastraTemperaturas(temperaturas, dias);
mediaTemp(temperaturas, dias, &media);
exibeMediaTemperatura(media);
return 0;
}
void alocaInt(int **p, int q) {
*p = (int*) realloc(*p, q * sizeof(int));
if(*p == NULL)
exit(1);
}
void alocaFloat(float **p, int q) {
*p = (float*) realloc(*p, q * sizeof(float));
if(*p == NULL)
exit(1);
}
void cadastraTemperaturas(float *p, int q) {
for(int i = 0; i < q; i++) {
printf("Temperatura %d: ", i + 1);
scanf("%f", (p + i));
}
}
void mediaTemp(float *p, int q, float *media) {
for(int i = 0; i < q; i++) {
*media += *(p + i);
}
*media = *media / q;
}
void exibeMediaTemperatura(float media) {
printf("Temperatura media mensal: %.2f\n", media);
}
