from django.shortcuts import render


# webpack����������html�����̂܂܃e���v���[�g�Ƃ��ēǂݍ��܂���
def index(request):
    return render(request, 'index.html', {})