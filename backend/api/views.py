from rest_framework.response import Response
from rest_framework.decorators import api_view


@api_view(['GET', 'POST'])
def call(request):
    if request.method == 'GET':
        return Response("Thanks for the GET request")

    elif request.method == 'POST':
        content = request.data["data"].upper()
        return Response(f"This was the  POST request content: {content}")
