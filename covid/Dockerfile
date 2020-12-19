FROM python:3.8
ENV PYTHONUNBUFFERED 1
EXPOSE 8000
RUN mkdir /app
WORKDIR /app
COPY requirements.txt /app
RUN python -m pip install --upgrade pip
RUN pip install -r requirements.txt
# RUN python manage.py migrate
COPY . /app
RUN python manage.py migrate
CMD ["python", "manage.py", "runserver","0.0.0.0", "8000"]