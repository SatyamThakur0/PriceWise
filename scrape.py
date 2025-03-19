import requests
from bs4 import BeautifulSoup
from fake_useragent import UserAgent
import json

try:
    ua = UserAgent()
    headers = {"User-Agent": ua.random}
except:
    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"}

def scrape_amazon(search_query):
    base_url = "https://www.amazon.in/s?k="
    search_url = base_url + search_query.replace(" ", "+")
    # print(search_url)
    
    response = requests.get(search_url, headers=headers)
    # print(response.content)    
    if response.status_code != 200:
        print("Failed to retrieve the webpage. Amazon might be blocking requests.")
        return []
    
    soup = BeautifulSoup(response.text, "html.parser")
    # print(soup)
    products = []

    for item in soup.find_all("div", {"data-component-type": "s-search-result"}):
        title_element = item.find("h2")
        if title_element:
            title = title_element.text.strip()
        else:
            continue
        
        price_element = item.find("span", {"class": "a-price-whole"})
        price = price_element.text.strip() if price_element else "N/A"
        
        link_element = item.find("a", {"class": "a-link-normal"})
        img_element = item.find("img", {"class": "s-image"})

        if img_element:
            img = img_element["src"]
        else:
            img = "N/A"
        
        delivery_element = item.find("span", {"class": "a-text-bold"})
        if delivery_element:
            delivery = delivery_element.text.strip()
        else:
            delivery = "N/A"

        if link_element:
            link = "https://www.amazon.in" + link_element["href"]
        else:
            continue
        
        products.append({"title": title, "price": price, "image": img,"seller" : "Amazon","link": link, "delivery": delivery})
    return products


def scrape_flipkart(search_query):
    base_url = "https://www.flipkart.com/search?q="
    search_url = base_url + search_query.replace(" ", "%20")
    # print(search_url)
    
    response = requests.get(search_url, headers=headers)
    print(response.status_code)    
    if response.status_code != 200:
        print("Failed to retrieve the webpage. Flipkart might be blocking requests.")
        return []
    
    soup = BeautifulSoup(response.text, "html.parser")
    # print(soup)
    products = []

    for item in soup.find_all("div", {"class": "DOjaWF gdgoEp"}):
        title_element = item.find("a", {"class": "wjcEIp"})
        if title_element:
            title = title_element.text.strip()
        else:
            continue
        print(title)
        price_element = item.find("div", {"class": "Nx9bqj"})
        price = price_element.text.strip() if price_element else "N/A"
        
        link_element = item.find("a", {"class": "DMMoT0"})
        if link_element:
            link = "https://www.flipkart.com" + link_element["href"]
        else:
            continue
        
        products.append({"title": title, "price": price, "seller" : "Flipkart","link": link})
    return products


if __name__ == "__main__":
    search_query = input("Enter product name to search: ")
    amazon_results = scrape_amazon(search_query)
    # flipkart_results = scrape_flipkart(search_query)

    results = amazon_results 
    # print(flipkart_results)
    if results:
        with open("products.json", "w") as f:
            json.dump(results, f, indent=4)
        print("Products saved to 'products.json'.")
    else:
        print("No products found or Amazon blocked the request.")
